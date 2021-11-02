const connection = require('../models'); // Import connection from mongoDB

class Transaction {
  async createTransaction(req, res, next) {
    try {
      const dbConnection = connection.db('sales_morning'); // Connect to database sales_morning
      const transaction = dbConnection.collection('transactions'); // Connect to table/collection transaction

      const data = await transaction.insertOne(req.body); // Create data in mongoDB

      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ['Internal Server Error'] });
    }
  }
}

module.exports = new Transaction();
