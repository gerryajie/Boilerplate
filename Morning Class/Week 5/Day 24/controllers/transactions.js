const { transaction, supplier } = require('../models');

class Transaction {
  async getAllTransactions(req, res, next) {
    try {
      // Find all transactions
      let data = await transaction.find().populate({ path: 'customer' });

      if (data.length === 0) {
        return next({ message: 'Transactions not found', statusCode: 404 });
      }

      // Find every supplier for every data
      for (let i = 0; i < data.length; i++) {
        data[i].good.supplier = await supplier.findOne({
          _id: data[i].good.supplier,
        });
      }

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  async getDetailTransaction(req, res, next) {
    try {
      // Find transaction by req.params.id
      let data = await transaction
        .findOne({ _id: req.params.id })
        .populate({ path: 'customer' });

      if (!data) {
        return next({ message: 'Transaction not found', statusCode: 404 });
      }

      // Add more detail data of good supplier
      data.good.supplier = await supplier.findOne({ _id: data.good.supplier });

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  async createTransaction(req, res, next) {
    try {
      // Create data into transaction
      const createdData = await transaction.create(req.body);

      // Find the new data
      let data = await transaction
        .findOne({ _id: createdData._id })
        .populate({ path: 'customer', select: '-deleted' })
        .select('-deleted');

      // Add more detail data of good supplier
      data.good.supplier = await supplier.findById(data.good.supplier);

      res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  }

  async updateTransaction(req, res, next) {
    try {
      // Update data
      let data = await transaction
        .findOneAndUpdate(
          { _id: req.params.id },
          req.body, // This is all of req.body
          { new: true }
        )
        .populate({ path: 'customer' });
      // new is to return the updated transaction data
      // If no new, it will return the old data before updated

      if (!data) {
        return next({ message: 'Transaction not found', statusCode: 404 });
      }

      // Add more detail data of good supplier
      data.good.supplier = await supplier.findOne({ _id: data.good.supplier });

      // If success
      return res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  }

  async deleteTransaction(req, res, next) {
    try {
      // Delete data by req.params.id
      const data = await transaction.delete({ _id: req.params.id });

      if (data.n === 0) {
        return next({ message: 'Transaction not found', statusCode: 404 });
      }

      res.status(200).json({ message: 'Transaction has been deleted' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Transaction();
