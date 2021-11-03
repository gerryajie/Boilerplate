const { transaction } = require('../models');

class Transaction {
  async createTransaction(req, res, next) {
    try {
      const createdData = await transaction.create(req.body);

      res.status(201).json({ data: createdData });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Transaction();
