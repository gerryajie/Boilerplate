const { transaction, customer, good, supplier } = require('../models');

class Transaction {
  async createTransaction(req, res, next) {
    try {
      // Create data
      // req.body = { id_customer, id_good, quantity, total }, it will be geteing values from client and from validator
      const createdData = await transaction.create(req.body);

      // Find new data by createdData
      const data = await transaction.findOne({
        where: { id: createdData.id },
        // Include is join
        include: [
          { model: customer },
          {
            model: good,
            include: [
              {
                model: supplier,
              },
            ],
          },
        ],
      });

      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ['Internal Server Error'] });
    }
  }
}

module.exports = new Transaction();
