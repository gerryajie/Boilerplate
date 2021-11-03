const express = require('express'); // Import express

// Import validator
const {
  createOrUpdateTransactionValidator,
} = require('../middlewares/validators/transactions');

// Import transaction
const { createTransaction } = require('../controllers/transactions');

// Define router
const router = express.Router();

// Make routes
router.post('/', createOrUpdateTransactionValidator, createTransaction);

// Exports router
module.exports = router;
