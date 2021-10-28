const express = require('express'); // Import express

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

router.get('/', getAllTransactions);
router.get('/:id', getDetailTransaction);
router.post('/', createTransaction);
router.put('/:id', updateTransaction);
router.delete('/:id', deleteTransaction);

module.exports = router; // Export router
