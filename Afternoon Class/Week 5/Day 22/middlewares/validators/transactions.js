const validator = require('validator');
const { ObjectId } = require('mongodb');
const connection = require('../../models');

exports.createOrUpdateTransactionValidator = async (req, res, next) => {
  try {
    const errorMessages = [];

    if (!validator.isInt(req.body.quantity)) {
      errorMessages.push('quantity must be integer');
    }

    if (errorMessages.length > 0) {
      return next({ messages: errorMessages, statusCode: 400 });
    }

    // Find good
    const good = await connection
      .db('sales_morning')
      .collection('goods')
      .findOne({ _id: ObjectId(req.body.id_good) });

    if (!good) {
      return next({ message: 'Good not found', statusCode: 400 });
    }

    // price is decimal, so it needs to convert to string then to number
    const total =
      parseFloat(req.body.quantity) * parseFloat(good.price.toString());

    // validate req.body
    req.body = {
      id_customer: ObjectId(req.body.id_customer),
      good,
      quantity: parseFloat(req.body.quantity),
      total,
    };

    next();
  } catch (error) {
    next(error);
  }
};
