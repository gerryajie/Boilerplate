const { good, supplier } = require('../models');

class Good {
  async createGood(req, res, next) {
    try {
      // Create good
      const newData = await good.create(req.body);

      // Find good with join
      const data = await good.findOne({
        where: {
          id: newData.id,
        },
        attributes: { exclude: ['id_supplier'] },
        include: [
          {
            model: supplier,
          },
        ],
      });

      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ['Internal Server Error'] });
    }
  }
}

module.exports = new Good();
