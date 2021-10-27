const express = require('express');

// Import controller
const {
  createTransaction,
  getAllTransactions,
  getOneTransaction,
} = require('../controllers/transactions');

const router = express.Router(); // Make router

router.get('/', getAllTransactions);
router.post('/', createTransaction);
router.get('/:id', getOneTransaction);

module.exports = router;
