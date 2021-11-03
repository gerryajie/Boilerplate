require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

mongoose
  .connect(uri)
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.log(err));
