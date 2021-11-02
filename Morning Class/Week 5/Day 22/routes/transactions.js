const express = require('express'); // Import express

// Import transaction
const { createTransaction } = require('../controllers/transactions');

// Define router
const router = express.Router();

// Make routes
router.post('/', createTransaction);

// Exports router
module.exports = router;
