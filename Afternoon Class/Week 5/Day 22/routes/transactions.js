const express = require('express'); // Import express

// Import controller
const { createTransaction } = require('../controllers/transactions');

// Make router
const router = express.Router();

// Routes
router.post('/', createTransaction);

// Exports router
module.exports = router;
