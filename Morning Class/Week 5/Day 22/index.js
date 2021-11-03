require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` }); // Use dotenv
const express = require('express'); // Import express

// Import errorHandler
const errorHandler = require('./middlewares/errorHandler');

// Import routes
const transactions = require('./routes/transactions');

const port = process.env.PORT || 3000; // Define the port

const app = express(); // Make app

// Enable req.body (json and urlencoded)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Make routes
app.use('/transactions', transactions);

// If routes not exists
app.all('*', (req, res, next) => {
  next({ statusCode: 404, message: 'Endpoint is not found' });
});

// Enable errorHandler
app.use(errorHandler);

// Running the server
app.listen(port, () => console.log(`Server running on ${port}`));
