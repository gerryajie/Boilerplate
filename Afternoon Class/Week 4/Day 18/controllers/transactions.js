const { query } = require('../models'); // Import connection

class Transaction {
  // Get all transaction
  async getAllTransactions(req, res, next) {
    try {
      // Find all data in transactions
      const data = await query(
        'SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t JOIN customers c ON t.id_customer=c.id JOIN goods g ON g.id=t.id_good JOIN suppliers s ON g.id_supplier=s.id ORDER BY t.id',
        []
      );

      // If transactions not exists
      if (data.length === 0) {
        return res.status(404).json({ errors: ['Transactions not found'] });
      }

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ['Internal Server Error'] });
    }
  }

  // Get detail transaction
  async getDetailTransaction(req, res, next) {
    try {
      // Find all data in transactions
      const data = await query(
        'SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t JOIN customers c ON t.id_customer=c.id JOIN goods g ON g.id=t.id_good JOIN suppliers s ON g.id_supplier=s.id WHERE t.id=?',
        [req.params.id]
      );

      // If transactions not exists
      if (data.length === 0) {
        return res.status(404).json({ errors: ['Transaction not found'] });
      }

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ['Internal Server Error'] });
    }
  }

  // Create transaction
  async createTransaction(req, res, next) {
    try {
      /* Callback */
      // Find good and that price
      // connection.query(
      //   'SELECT * FROM goods WHERE id=?',
      //   [req.body.id_good],
      //   (err, results) => {
      //     if (err) {
      //       return res.status(500).json({ errors: ['Internal Server Error'] });
      //     }

      //     const price = results[0].price;
      //     const total = parseFloat(price) * parseFloat(req.body.quantity);

      //     // Insert Data
      //     connection.query(
      //       'INSERT INTO transactions(id_customer, id_good, quantity, total) VALUES (?, ?, ?, ?)',
      //       [req.body.id_customer, req.body.id_good, req.body.quantity, total],
      //       (err, results) => {
      //         if (err) {
      //           return res
      //             .status(500)
      //             .json({ errors: ['Internal Server Error'] });
      //         }

      //         // Find new Data
      //         connection.query(
      //           'SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t JOIN customers c ON t.id_customer=c.id JOIN goods g ON g.id=t.id_good JOIN suppliers s ON g.id_supplier=s.id WHERE t.id=?',
      //           [results.insertId],
      //           (err, results) => {
      //             if (err) {
      //               return res
      //                 .status(500)
      //                 .json({ errors: ['Internal Server Error'] });
      //             }

      //             res.status(201).json({ data: results });
      //           }
      //         );
      //       }
      //     );
      //   }
      // );

      /* Async Await */
      // Find good and price
      const goods = await query('SELECT * FROM goods WHERE id=?', [
        req.body.id_good,
      ]);
      const price = goods[0].price;
      const total = parseFloat(price) * parseFloat(req.body.quantity);

      // Insert Data
      const insertedData = await query(
        'INSERT INTO transactions(id_customer, id_good, quantity, total) VALUES (?, ?, ?, ?)',
        [req.body.id_customer, req.body.id_good, req.body.quantity, total]
      );

      // Find new data
      const data = await query(
        'SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t JOIN customers c ON t.id_customer=c.id JOIN goods g ON g.id=t.id_good JOIN suppliers s ON g.id_supplier=s.id WHERE t.id=?',
        [insertedData.insertId]
      );

      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ['Internal Server Error'] });
    }
  }
}

module.exports = new Transaction();
