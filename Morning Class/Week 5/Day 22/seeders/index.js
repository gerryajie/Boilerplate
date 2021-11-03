require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` }); // Use dotenv
const { MongoClient } = require('mongodb');
const faker = require('faker');

// Connection URL
const url = process.env.MONGO_URI;
const connection = new MongoClient(url);

async function main() {
  try {
    // Use connect method to connect to the server
    await connection.connect();
    return 'Connected successfully to server';
  } catch (error) {
    throw error;
  }
}

const addCustomers = async () => {
  try {
    const dbConnection = await connection.db('sales_morning'); // Connect to database sales_morning
    const customers = await dbConnection.collection('customers'); // Connect to table customers

    await customers.insertMany([
      { name: faker.name.findName() },
      { name: faker.name.findName() },
      { name: faker.name.findName() },
    ]);
  } catch (error) {
    console.error(error);
  }
};

const addSuppliers = async () => {
  try {
    const dbConnection = await connection.db('sales_morning'); // Connect to database sales_morning
    const suppliers = await dbConnection.collection('suppliers'); // Connect to table suppliers

    let data = await suppliers.insertMany([
      { name: faker.name.findName() },
      { name: faker.name.findName() },
      { name: faker.name.findName() },
    ]);

    return data;
  } catch (error) {
    console.error(error);
  }
};

const addGoods = async (suppliers) => {
  try {
    const dbConnection = await connection.db('sales_morning'); // Connect to database sales_morning
    const goods = await dbConnection.collection('goods'); // Connect to table goods

    await goods.insertMany([
      {
        name: faker.commerce.productName(),
        price: faker.commerce.price() * 14000,
        id_supplier: suppliers.insertedIds['0'],
      },
      {
        name: faker.commerce.productName(),
        price: faker.commerce.price() * 14000,
        id_supplier: suppliers.insertedIds['1'],
      },
      {
        name: faker.commerce.productName(),
        price: faker.commerce.price() * 14000,
        id_supplier: suppliers.insertedIds['2'],
      },
    ]);
  } catch (error) {
    console.error(error);
  }
};

const run = async () => {
  try {
    await main();
    const customersSuppliers = await Promise.all([
      addCustomers(),
      addSuppliers(),
    ]);
    await addGoods(customersSuppliers[1]);
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === 'seed') {
  run().then(() => process.exit(0));
}
