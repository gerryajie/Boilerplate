const express = require('express'); // Import express

// Import Students Controller
const {
  getAllStudent,
  getDetailStudent,
  addStudent,
  updateStudent,
  deleteStudent,
} = require('../controllers/students');

const router = express.Router(); // Import router

// If client access to http://localhost/students (GET) it will go to getAllStudent function in the students controller class
router.get('/', getAllStudent);

// If client access to http://localhost/students/:id (GET) it will go to getDetailStudent function in the students controller class
router.get('/:id', getDetailStudent);

// If client access to http://localhost/students (POST) it will go to addStudent function in the students controller class
router.post('/', addStudent);

// If client access to http://localhost/students/:id (PUT) it will go to updateStudent function in the students controller class
router.put('/:id', updateStudent);

// If client access to http://localhost/students/:id (DELETE) it will go to deleteStudent function in the students controller class
router.delete('/:id', deleteStudent);

module.exports = router; // Exports router
