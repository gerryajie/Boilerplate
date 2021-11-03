require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` }); // Use dotenv
const { MongoClient } = require('mongodb');

// Connection URL
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

async function main() {
  try {
    // Use connect method to connect to the server
    await client.connect();
    return 'Connected successfully to server';
  } catch (error) {
    throw error;
  }
}

main()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

module.exports = client;
