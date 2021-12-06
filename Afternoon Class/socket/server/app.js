// ini setup server pake express
// const express = require("express");
// const app = express();
// ini setup buka koneksi socket di server
// const http = require("http");
// const server = http.createServer(app);
const io = require("socket.io")(3000, {
  cors: {
    origin: ["http://localhost:8081"],
  },
});
// const { Server } = require("socket.io");
// const io = new Server(server, {
//   cors: {
//     origin: ["http://localhost:8081"],
//   },
// });

io.on("connection", (socket) => {
  console.log(`a user connected ${socket.id}`);

  socket.on("send-message", (payload) => {
    console.log("payload", payload);

    socket.broadcast.emit("receive-message", payload);
  });
});

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

// app.listen(3000, () => console.log("server is running on 3000"));
