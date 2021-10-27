const express = require('express'); // Import express

// Import controller
const {
  createTransaction,
  getAllTransactions,
  getDetailTransaction,
} = require('../controllers/transactions');

// Make router
const router = express.Router();

router.get('/', getAllTransactions);
router.get('/:id', getDetailTransaction);
router.post('/', createTransaction);

module.exports = router; // Export router
