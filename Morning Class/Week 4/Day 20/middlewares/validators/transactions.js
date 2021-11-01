const validator = require('validator');
const { good } = require('../../models');

exports.createOrUpdateTransactionValidator = async (req, res, next) => {
  try {
    /* Validate the request */
    const errors = [];

    if (!validator.isInt(req.body.id_good.toString())) {
      errors.push(`ID Good must be number (integer)`);
    }

    if (!validator.isInt(req.body.id_customer.toString())) {
      errors.push(`ID Customer must be number (integer)`);
    }

    if (!validator.isInt(req.body.quantity.toString())) {
      errors.push(`Quantity must be number (integer)`);
    }

    if (errors.length > 0) {
      return res.status(404).json({ errors: errors });
    }

    // Find price and total
    const findGood = await good.findOne({ where: { id: req.body.id_good } });

    if (!findGood) {
      return res.status(404).json({ errors: ['Good is not exist'] });
    }

    const { price } = findGood;
    req.body.total = parseFloat(price) * parseFloat(req.body.quantity);

    next();
  } catch (error) {
    res.status(500).json({ errors: ['Internal Server Error'] });
  }
};
