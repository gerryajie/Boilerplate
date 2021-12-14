require("dotenv").config()
const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./routers");


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(route);

module.exports = app;
// app.use(errorHandler);
// app.listen(port, () => {
//   console.log(`Example app  222 listening at http://localhost:${port}`);
// });

