const express = require('express'); // Import express

// Import validator
const {
  createTransactionValidator,
} = require('../middlewares/validators/transactions');

// Import controllers
const { createTransaction } = require('../controllers/transactions');

const router = express.Router(); // Make router

/* Routes */
router.post('/', createTransactionValidator, createTransaction);

module.exports = router; // Export router
