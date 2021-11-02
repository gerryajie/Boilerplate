require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` }); // Use dotenv
const express = require('express'); // Import express

// Import routes
const transactions = require('./routes/transactions');

const port = process.env.PORT || 3000; // Define the port

const app = express(); // Make app

// Enable req.body (json and urlencoded)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Make routes
app.use('/transactions', transactions);

// Running the server
app.listen(port, () => console.log(`Server running on ${port}`));
