const express = require('express'); // Import express
const fileUpload = require('express-fileupload');

// Import routes
const transactions = require('./routes/transactions');

const port = process.env.PORT || 3000; // Define port

const app = express();

// Enable req.body (json and urlencoded)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable req.body (form-data)
app.use(fileUpload());

// Make routes
app.use('/transactions', transactions);

// Run the server
app.listen(port, () => console.log(`Server running on port ${port}`));
