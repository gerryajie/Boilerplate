const express = require("express");
const axios = require("axios");
const cors = require("cors");
const Redis = require("redis");
function setup() {
  redisClient = Redis.createClient();
  console.log("🚀 ~ file: app.js ~ line 7 ~ setup ~ redisClient", redisClient);

  redisClient.on("error", function (error) {
    console.error(`❗️ Redis Error: ${error}`);
  });

  redisClient.on("ready", () => {
    console.log("✅ 💃 redis have ready !");
  });

  redisClient.on("connect", () => {
    console.log("✅ 💃 connect redis success !");
  });
}

const DEFAULT_EXPIRATION = 3600;

const app = express();
const port = process.env.port || 3000;
app.use(cors());

setup();

app.get("/photos", async (req, res) => {
  console.log("masuk");
  const albumId = req.query.albumId;
  console.log(redisClient.get, "====");
  redisClient.on("error", (error) => {
    redisClient.disconnect(true);
    console.log(`[*] Redis error:\n${error}`);
  });
  redisClient.get(`photos?albumId=${albumId}`, async (err, photos) => {
    if (err) console.error(err);
    if (photos !== null) {
      console.log("dari redis");
      return res.json(JSON.parse(photos));
    } else {
      console.log("cache belom ada. kita ambil dari axios");
      const { data } = await axios.get(
        "http://jsonplaceholder.typicode.com/photos",
        { params: { albumId } }
      );
      redisClient.setEx(
        `photos?albumId=${albumId}`,
        DEFAULT_EXPIRATION,
        JSON.stringify(data)
      );
      res.json(data);
    }
  });
});

app.post("photos", (req, res) => {
  // update photos redis
});

app.put("photos/:id", (req, res) => {
  // update photos redis
  // updateDiDB()
  // updateDiRedis
});

app.get("/photos/:id", async (req, res) => {
  const { data } = await axios.get(
    `http://jsonplaceholder.typicode.com/photos/${req.params.id}`
  );

  res.json(data);
});

app.listen(port, () => console.log(`app running in port ${port}`));
