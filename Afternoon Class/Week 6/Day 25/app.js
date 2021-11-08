const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const validation = require("./middlewares/validation")

// app.set("view engine", "ejs")

const port = 3000;
const router = require("./routes/index");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/', router) // middleware routing

app.use(validation) // middleware validation

app.get('*', function(req, res){
  res.status(404).send('not found');
});

app.listen(port, () => {console.log(`example listening in port ${port}`)})

let response = {
  "statusCode": 201,
  "userCreated": {
      "id": 12,
      "email": "fadhlan@gmail.com",
      "firstName": "Fadhlan",
      "lastName": "Fadhlan",
      "companyId": 2,
      "updatedAt": "2021-09-15T06:54:53.274Z",
      "createdAt": "2021-09-15T06:54:53.274Z",
      "CompanyId": null
  }
}

switch (response.statusCode) {
  case "201":
    // nampilin message success
    break;

  case "400":
    // nampilin message validasinya
    break;
  default:
    break;
}