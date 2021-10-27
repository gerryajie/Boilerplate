const express = require('express'); // Import express

/* Import routes */
const transactions = require('./routes/transactions');

const port = process.env.PORT || 3000; // Define the port

const app = express(); // Make express app

/* Enable req.body */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Using routes */
app.use('/transactions', transactions);

/* Running the app server */
app.listen(port, () => console.log(`Server running on ${port}!`));
