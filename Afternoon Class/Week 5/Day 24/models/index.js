require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` }); // Define the env
const mongoose = require('mongoose'); // Import mongoose

const uri = process.env.MONGO_URI; // Import uri from env (MONGO_URI)

// Connect to MongoDB
mongoose
  .connect(uri)
  .then(() => console.log('Connect to MongoDB'))
  .catch((err) => console.log(err));

exports.customer = require('./customer');
exports.good = require('./good');
exports.supplier = require('./supplier');
exports.transaction = require('./transaction');
