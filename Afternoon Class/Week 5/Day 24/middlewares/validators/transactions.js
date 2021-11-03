const validator = require('validator');
const mongoose = require('mongoose');
const { good, customer } = require('../../models');

exports.createOrUpdateTransactionValidator = async (req, res, next) => {
  try {
    const errors = [];

    // Validate the user input
    if (mongoose.Schema.ObjectId.isValid(req.body.id_good)) {
      errors.push(`ID Good is not valid!`);
    }

    if (mongoose.Schema.ObjectId.isValid(req.body.id_customer)) {
      errors.push(`ID Customer is not valid!`);
    }

    if (!validator.isInt(req.body.quantity)) {
      errors.push(`Quantity must be a number!`);
    }

    if (errors.length > 0) {
      return next({ statusCode: 400, messages: errors });
    }

    // Find good to find total
    const data = await Promise.all([
      good.findById(req.body.id_good),
      customer.findById(req.body.id_customer),
    ]);

    if (!data[0] || !data[1]) {
      return next({ statusCode: 400, message: 'Good or customer not found!' });
    }

    const { price } = data[0];
    req.body.good = data[0];
    req.body.customer = req.body.id_customer;
    req.body.total = parseFloat(price) * parseFloat(req.body.quantity);

    next();
  } catch (error) {
    next({ statusCode: 400, message: error.message });
  }
};
