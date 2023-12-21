const express = require('express')
const {
  addStudent,
  getStudents,
  getStudent,
  deleteStudent,
  updateStudent
} = require('../controllers/studentController')
const Authenticate = require('../middleware/Authenticate')

const router = express.Router()

// require authenticate for all Student routes
router.use(Authenticate)

// GET all Students
router.get('/', getStudents)

//GET a single Student
router.get('/:id', getStudent)

// POST a new Student
router.post('/', addStudent)

// DELETE a Student
router.delete('/:id', deleteStudent)

// UPDATE a Student
router.patch('/:id', updateStudent)


module.exports = router