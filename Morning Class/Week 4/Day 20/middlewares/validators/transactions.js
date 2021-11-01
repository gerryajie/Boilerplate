const validator = require('validator');
const { good } = require('../../models');

exports.createTransactionValidator = async (req, res, next) => {
  try {
    const errors = []; // Variable errors to save the every errors

    /* It will check every req.body input */
    if (!validator.isNumeric(req.body.id_good)) {
      errors.push(`ID good must be a number!`);
    }

    if (!validator.isNumeric(req.body.id_customer)) {
      errors.push(`ID customer must be a numbers!`);
    }

    if (!validator.isNumeric(req.body.quantity)) {
      errors.push(`Quantity must be a number!`);
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors: errors });
    }

    /* Find good, price and total */
    const findGood = await good.findOne({ where: { id: req.body.id_good } });

    if (!findGood) {
      errors.push('Good is not exists');
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors: errors });
    }

    const { price } = findGood;
    req.body.total = parseFloat(price) * parseFloat(req.body.quantity); // It will be read by req.body in controller

    // It will next to right function in the router
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ errors: ['Bad Request'] });
  }
};
