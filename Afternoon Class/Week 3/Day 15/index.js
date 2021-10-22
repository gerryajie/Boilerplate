const express = require('express'); // Import express
const app = express(); // Make express app

const students = require('./routes/students'); // Import students routes

const port = process.env.PORT || 3000; // Define port

app.use(express.json()); // Enable req.body (JSON)
app.use(express.urlencoded({ extended: true })); // Enable req.body (URL-Encoded)

// Handle client when client access to http://localhost:3000/students
app.use('/students', students);

// Run this application on port 3000
app.listen(port, () => {
  console.log(`Server running on ${port}!`);
});
