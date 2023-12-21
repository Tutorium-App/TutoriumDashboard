const express = require('express')
const {
  addTutor,
  getTutors,
  getTutor,
  deleteTutor,
  updateTutor
} = require('../controllers/tutorController')
const Authenticate = require('../middleware/Authenticate')

const router = express.Router()

// require authenticate for all Tutor routes
router.use(Authenticate)

// GET all Tutors
router.get('/', getTutors)

//GET a single Tutor
router.get('/:id', getTutor)

// POST a new Tutor
router.post('/', addTutor)

// DELETE a Tutor
router.delete('/:id', deleteTutor)

// UPDATE a Tutor
router.patch('/:id', updateTutor)


module.exports = router