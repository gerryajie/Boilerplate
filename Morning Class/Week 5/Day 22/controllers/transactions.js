const { ObjectId } = require('mongodb'); // Import ObjectId
const connection = require('../models');

class Transactions {
  async getAllTransactions(req, res, next) {
    try {
      const data = await connection
        .db('sales_morning')
        .collection('transactions')
        .find()
        .toArray();

      if (data.length === 0) {
        return next({ message: 'Transactions not found', statusCode: 404 });
      }

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  async getDetailTransaction(req, res, next) {
    try {
      let data = await connection
        .db('sales_morning')
        .collection('transactions')
        .findOne({ _id: ObjectId(req.params.id) });

      if (!data) {
        return next({ message: 'Transactions not found', statusCode: 404 });
      }

      data.customer = await connection
        .db('sales_morning')
        .collection('customers')
        .findOne({ _id: ObjectId(data.id_customer) });

      data.good.supplier = await connection
        .db('sales_morning')
        .collection('suppliers')
        .findOne({ _id: ObjectId(data.good.id_supplier) });

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  async createTransaction(req, res, next) {
    try {
      // Insert data transaction
      const newData = await connection
        .db('sales_morning')
        .collection('transactions')
        .insertOne(req.body);

      let data = await connection
        .db('sales_morning')
        .collection('transactions')
        .findOne({ _id: newData.insertedId });

      data.customer = await connection
        .db('sales_morning')
        .collection('customers')
        .findOne({ _id: ObjectId(data.id_customer) });

      // Find good supplier
      data.good.supplier = await connection
        .db('sales_morning')
        .collection('suppliers')
        .findOne({ _id: ObjectId(data.good.id_supplier) });

      // If success
      res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  }

  async updateTransaction(req, res, next) {
    try {
      // Insert data transaction
      const updatedData = await connection
        .db('sales_morning')
        .collection('transactions')
        .updateOne({ _id: ObjectId(req.params.id) }, { $set: req.body });

      let data = await connection
        .db('sales_morning')
        .collection('transactions')
        .findOne({ _id: ObjectId(req.params.id) });

      data.customer = await connection
        .db('sales_morning')
        .collection('customers')
        .findOne({ _id: ObjectId(data.id_customer) });

      // Find good supplier
      data.good.supplier = await connection
        .db('sales_morning')
        .collection('suppliers')
        .findOne({ _id: ObjectId(data.good.id_supplier) });

      // If success
      res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  }

  async deleteTransaction(req, res, next) {
    try {
      const deletedData = await connection
        .db('sales_morning')
        .collection('transactions')
        .deleteOne({ _id: ObjectId(req.params.id) });

      if (deletedData.deletedCount === 0) {
        return next({ message: 'Transaction not found', statusCode: 404 });
      }

      res.status(200).json({ data: `Data with id ${req.params.id} deleted` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Transactions();
