const express = require('express');

// Import controller
const {
  createTransaction,
  getAllTransactions,
  getOneTransaction,
  updateTransaction,
  deleteTransaction,
} = require('../controllers/transactions');

const router = express.Router(); // Make router

router.get('/', getAllTransactions);
router.post('/', createTransaction);
router.get('/:id', getOneTransaction);
router.put('/:id', updateTransaction);
router.delete('/:id', deleteTransaction);

module.exports = router;
