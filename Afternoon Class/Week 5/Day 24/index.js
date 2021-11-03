require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` }); // Enable env
const express = require('express'); // Import express
const fileUpload = require('express-fileupload'); // Import fileupload

// Import routes
const transactions = require('./routes/transactions');

// Import errorHandler
const errorHandler = require('./middlewares/errorHandler');

const port = process.env.PORT || 3000; // Define port

const app = express(); // Make express app

// Enable req.body (JSON and URL encoded)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable req.body (form-data)
app.use(fileUpload());

/* 
  Add public folder to be static folder
  It means that public folder will be save files such as images, videos, documents, and other static files
  So, you just can get images with /images/:imageName
*/
app.use(express.static('public'));

// Make routes
app.use('/transactions', transactions);

// If routes not exists
app.all('*', (req, res, next) => {
  next({ statusCode: 404, message: 'Endpoint is not found' });
});

// Enable errorHandler
app.use(errorHandler);

// Run the server
app.listen(port, () => console.log(`Server running on ${port}`));
