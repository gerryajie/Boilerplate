require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` }); // Enable env
const mongoose = require('mongoose'); // Import mongoose

const uri = process.env.MONGO_URI; // import uri mongodb from env

// Connect to database (mongodb)
mongoose
  .connect(uri)
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.log(err));

exports.customer = require('./customer');
exports.good = require('./good');
exports.supplier = require('./supplier');
exports.transaction = require('./transaction');
