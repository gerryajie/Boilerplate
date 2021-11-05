const express = require('express');
const fileUpload = require('express-fileupload');

// Import errorHandler
const errorHandler = require('./middlewares/errorHandler');

// Import routes
const transactions = require('./routes/transactions');

const port = process.env.PORT || 3000; // Define the port

const app = express(); // Make express app

// Enable req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable req.body and req.files/req.file
app.use(fileUpload());

/* Make public folder for static file such as images, videos, documents and so on. */
app.use(express.static('public')); // You can access with GET in public folder

// Make routes
app.use('/transactions', transactions);

// If routes not found
app.all('*', (req, res, next) => {
  next({ statusCode: 404, message: 'Endpoint not found' });
});

app.use(errorHandler); // Use errorHandler

// Run the server
app.listen(port, () => console.log(`Server running on ${port}`));
