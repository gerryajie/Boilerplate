const connection = require('../models');

class Transaction {
  async createTransaction(req, res, next) {
    try {
      const dbConnection = connection.db('sales_afternoon'); // Connect to database sales_afternoon
      const transaction = dbConnection.collection('transactions'); // Connect to table/collection transaction

      // Insert data to transaction table
      const data = await transaction.insertOne(req.body);

      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ['Internal Server Error'] });
    }
  }
}

module.exports = new Transaction();
