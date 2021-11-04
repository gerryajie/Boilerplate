const validator = require('validator');
const mongoose = require('mongoose');
const { good, customer } = require('../../models');

exports.getDetailValidator = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return next({ message: 'id is not valid', statusCode: 400 });
    }

    next();
  } catch (error) {
    next(error);
  }
};

exports.createOrUpdateTransactionValidator = async (req, res, next) => {
  try {
    // Make errors variable
    const errors = [];

    // Validate every input from user
    if (!mongoose.Schema.Types.ObjectId.isValid(req.body.id_customer)) {
      errors.push(`ID Customer is not valid`);
    }

    if (!mongoose.Schema.Types.ObjectId.isValid(req.body.id_good)) {
      errors.push(`ID Good is not valid`);
    }

    if (!validator.isInt(req.body.quantity)) {
      errors.push(`Quantity must be a number!`);
    }

    if (errors.length > 0) {
      return next({ statusCode: 400, messages: errors });
    }

    // Find good, price and total
    const data = await Promise.all([
      good.findById(req.body.id_good),
      customer.findById(req.body.id_customer),
    ]);

    if (!data[0] || !data[1]) {
      return next({ statusCode: 400, message: 'Good or customer not found!' });
    }

    const { price } = data[0];
    req.body.total = parseFloat(price) * parseFloat(req.body.quantity);
    req.body.good = data[0];
    req.body.customer = req.body.id_customer;

    next();
  } catch (error) {
    next(error);
  }
};
