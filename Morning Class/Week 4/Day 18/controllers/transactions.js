const { query } = require('../models'); // Import connection from models

class Transaction {
  // All Transactions
  async getAllTransactions(req, res, next) {
    try {
      // Find all transaction data and order by id transactions
      const data = await query(
        'SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t JOIN customers c ON t.id_customer=c.id JOIN goods g ON g.id=t.id_good JOIN suppliers s ON g.id_supplier=s.id ORDER BY t.id'
      );

      // If data is empty array
      if (data.length === 0) {
        return res.status(404).json({ errors: ['Transactions not found'] });
      }

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ['Internal Server Error'] });
    }
  }

  // Get Detail
  async getOneTransaction(req, res, next) {
    try {
      // Find spesific transaction by req.params.id
      const data = await query(
        'SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t JOIN customers c ON t.id_customer=c.id JOIN goods g ON g.id=t.id_good JOIN suppliers s ON g.id_supplier=s.id WHERE t.id=?',
        [req.params.id]
      );

      // If data is empty array
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
      // Find good and its price
      // connection.query(
      //   'SELECT * FROM goods WHERE id=?',
      //   [req.body.id_good],
      //   (err, results) => {
      //     if (err) {
      //       return res.status(500).json({ errors: ['Internal Server Error'] });
      //     }
      //     const price = results[0].price;
      //     const total = parseFloat(price) * parseInt(req.body.quantity);
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
      // Find price of good
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

      // Find new Data
      const data = await query(
        'SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t JOIN customers c ON t.id_customer=c.id JOIN goods g ON g.id=t.id_good JOIN suppliers s ON g.id_supplier=s.id WHERE t.id=?',
        [insertedData.insertId]
      );

      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ['Internal Server Error'] });
    }
  }

  async updateTransaction(req, res, next) {
    try {
      // Find price of good
      const goods = await query('SELECT * FROM goods WHERE id=?', [
        req.body.id_good,
      ]);
      const price = goods[0].price;
      const total = parseFloat(price) * parseFloat(req.body.quantity);

      // Update transaction data
      const updatedData = await query(
        'UPDATE transactions SET id_good=?, id_customer=?, quantity=?, total=? WHERE id=?',
        [
          req.body.id_good,
          req.body.id_customer,
          req.body.quantity,
          total,
          req.params.id,
        ]
      );

      if (updatedData.affectedRows === 0) {
        return res.status(404).json({
          errors: ['Transaction not found'],
        });
      }

      // Find updated Data
      const data = await query(
        'SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t JOIN customers c ON t.id_customer=c.id JOIN goods g ON g.id=t.id_good JOIN suppliers s ON g.id_supplier=s.id WHERE t.id=?',
        [req.params.id]
      );

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ['Internal Server Error'] });
    }
  }

  async deleteTransaction(req, res, next) {
    try {
      const deletedData = await query('DELETE FROM transactions WHERE id=?', [
        req.params.id,
      ]);

      if (deletedData.affectedRows === 0) {
        return res.status(404).json({
          errors: ["Transaction has been deleted or it's not exists"],
        });
      }

      res.status(200).json({ data: [] });
    } catch (error) {
      res.status(500).json({ errors: ['Internal Server Error'] });
    }
  }
}

module.exports = new Transaction();
