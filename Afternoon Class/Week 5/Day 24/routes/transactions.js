const express = require('express'); // Import express

// Import validator
const {
  createOrUpdateTransactionValidator,
} = require('../middlewares/validators/transactions');

// Import controller
const { createTransaction } = require('../controllers/transactions');

// Make router
const router = express.Router();

// Routes
router.post('/', createOrUpdateTransactionValidator, createTransaction);

// Exports router
module.exports = router;
