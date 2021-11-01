const express = require('express');

// Import validator
const { createGoodValidator } = require('../middlewares/validators/goods');

// Import controller
const { createGood } = require('../controllers/goods');

const router = express.Router();

router.route('/').post(createGoodValidator, createGood);

module.exports = router;
