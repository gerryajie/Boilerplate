const express = require('express'); // Import express
const fileUpload = require('express-fileupload'); // Import fileUpload

// Import routes
const goods = require('./routes/goods');
const transactions = require('./routes/transactions');

const port = process.env.PORT || 3000;

const app = express(); // Make express app

// Enable req.body (json and urlencoded)
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
app.use('/goods', goods);
app.use('/transactions', transactions);

// Run the server
app.listen(port, () => console.log(`Server running on port ${port}!`));
