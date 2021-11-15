const express = require('express')
const app = express()
const { Cars } = require("./models")
 
app.get('/cars', async function (req, res) {
  try {
    // const { page, limit } = req.query;
    let page = req.query.page;
    // var limit = req.query.limit;
    // if (!req.query.limit) {
    //   limit = 2
    // }
    let limit = req.query.limit || 2;
    // let limit = (req.query.limit) ? req.query.limit : 2;
    // if (req.query.limit) {
    //   limit = req.query.limit
    // } else {
    //   limit = 2
    // }
    console.log("limit: ", limit)
    let offset = (+page - 1) * parseInt(limit);
    let cars = await Cars.findAll({ offset, limit })
    if (cars) {
      return res.json(cars)
    }
  } catch (error) {
    console.error(error)
  }
})

app.get('/cars/:id', async function (req, res) {
  try {
    // let id = req.params.id; // object destructuring
    let { id } = req.params; // object destructuring
    let car = await Cars.findByPk(id);
    if (car) {
      return res.json(car)
    }
  } catch (error) {
    console.error(error)
  }
})
 
app.listen(3000, () => {
  console.log("server run in localhost 3000")
})