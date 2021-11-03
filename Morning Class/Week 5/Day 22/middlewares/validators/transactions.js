const validator = require('validator');
const { ObjectId } = require('mongodb'); // Import ObjectId
const connection = require('../../models');

exports.createOrUpdateTransactionValidator = async (req, res, next) => {
  try {
    const dbConnection = connection.db('sales_morning'); // Connect to sales_morning db
    const goods = dbConnection.collection('goods'); // Connect to goods collection/table
    const customers = dbConnection.collection('customers'); // Connect to customers collection/table

    // Find good and customer
    const data = await Promise.all([
      goods.findOne({ _id: new ObjectId(req.body.id_good) }),
      customers.findOne({ _id: new ObjectId(req.body.id_customer) }),
    ]);

    // If good or customer doesn't exist
    if (!data[0] || !data[1]) {
      return res
        .status(400)
        .json({ errors: ["Good or Customer doesn't exist"] });
    }

    // Find the total
    req.body.total = parseFloat(data[0].price) * parseFloat(req.body.quantity);
    req.body.good = data[0]; // Make duplicate for good
    req.body.time = new Date().toISOString(); // Add time for that transaction
    delete req.body.id_good; // delete id_good in req.body

    next();
  } catch (error) {
    res.status(400).json({ errors: ['Bad Request'] });
  }
};
