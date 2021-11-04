const { transaction } = require('../models');

class Transaction {
  async createTransaction(req, res, next) {
    try {
      // Create transaction data
      const data = await transaction.create(req.body);

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Transaction();
