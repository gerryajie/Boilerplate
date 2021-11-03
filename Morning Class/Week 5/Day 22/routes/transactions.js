const express = require('express');

// Import validator
const {
  createOrUpdateTransactionValidator,
} = require('../middlewares/validators/transactions');

// Import controller
const {
  createTransaction,
  getAllTransactions,
  getDetailTransaction,
  updateTransaction,
  deleteTransaction,
} = require('../controllers/transactions');

// Make router
const router = express.Router();

router
  .route('/')
  .post(createOrUpdateTransactionValidator, createTransaction)
  .get(getAllTransactions);

router
  .route('/:id')
  .get(getDetailTransaction)
  .put(createOrUpdateTransactionValidator, updateTransaction)
  .delete(deleteTransaction);

module.exports = router;
