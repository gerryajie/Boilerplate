const express = require('express');

// Import validator
const {
  createOrUpdateTransactionValidator,
} = require('../middlewares/validators/transactions');

// Import controller
const { createTransaction } = require('../controllers/trensactions');

// Make router
const router = express.Router();

// Make routes
router.post('/', createOrUpdateTransactionValidator, createTransaction);

module.exports = router;
