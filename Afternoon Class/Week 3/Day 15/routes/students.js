const express = require('express'); // Import express

const {
  getAllStudents,
  getDetailStudent,
  addStudent,
} = require('../controllers/students'); // Import students controller

const router = express.Router(); // Make router

// If client request to http://localhost:3000/students (GET), it will go to getAllStudents function in student controller class
router.get('/', getAllStudents);

// If client request to http://localhost:3000/students/:id (GET), it will go to getDetailStudent function in student controller class
router.get('/:id', getDetailStudent);

// If client request to http://localhost:3000/students (POST), it will go to addStudent function in student controller class
router.post('/', addStudent);

// If client access to http://localhost/students/:id (PUT) it will go to updateStudent function in the students controller class
router.put('/:id', updateStudent);

// If client access to http://localhost/students/:id (DELETE) it will go to deleteStudent function in the students controller class
router.delete('/:id', deleteStudent);

module.exports = router; // Exports router
