const validator = require('validator');
const { good } = require('../../models');

exports.createOrUpdateTransactionValidator = async (req, res, next) => {
  try {
    // Variable to save the errors
    const errors = [];

    // Check all input from user
    if (!validator.isInt(req.body.id_good)) {
      errors.push(`ID Good must be a number!`);
    }

    if (!validator.isInt(req.body.id_customer)) {
      errors.push(`ID Customer must be a number!`);
    }

    if (!validator.isInt(req.body.quantity)) {
      errors.push(`Quantity must be a number!`);
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors: errors });
    }

    // Find good, price and total
    const findGood = await good.findOne({ where: { id: req.body.id_good } });

    if (!findGood) {
      errors.push(`Good is not exist`);
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors: errors });
    }

    const { price } = findGood;
    req.body.total = parseFloat(req.body.quantity) * parseFloat(price);

    next();
  } catch (error) {
    res.status(400).json({ errors: ['Bad Request'] });
  }
};
