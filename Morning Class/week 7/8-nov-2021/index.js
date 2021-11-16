require("dotenv").config()
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const route = require("./routers");
// const passport = require("passport")


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(route);
// app.use(errorHandler);
app.listen(port, () => {
  console.log(`Example app  222 listening at http://localhost:${port}`);
});
