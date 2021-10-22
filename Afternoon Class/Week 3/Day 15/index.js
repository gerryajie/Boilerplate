const express = require('express'); // Import express
const app = express(); // Make app from express

const students = require('./routes/students'); // Import the student routes

const port = process.env.PORT || 3000; // Define port

app.use(express.json()); // enable read req.body (JSON)
// Enable req.body (URL-Encoded)
app.use(
  express.urlencoded({
    extended: true,
  })
);

/* If client go to http://localhost:3000/students or http://localhost:3000 */
app.use('/students', students);

/* Running this app */
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
