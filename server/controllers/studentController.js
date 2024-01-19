const Student = require('../models/studentModel')
const mongoose = require('mongoose')


// get all Students
const getStudents = async (req, res) => {
    const student_id = req.body.id
  
    const students = await Student.find({student_id}).sort({createdAt: -1})
  
    res.status(200).json(students)
}

// get a single Student
const getStudent = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such student'})
    }
  
    const student = await Student.findById(id)
  
    if (!student) {
      return res.status(404).json({error: 'No such student'})
    }
    
    res.status(200).json(student)
}

// create new Student
const addStudent = async (req, res) => {
    const {studentID, fullName, email, phone, school, program, year, about, balance, rating, verified, profilePhotoLink} = req.body
    
    try {
        const student = await Student.addStudent(studentID, fullName, email, phone, school, program, year, about, balance, rating, verified, profilePhotoLink);
        res.status(200).json(student)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a Student
const deleteStudent = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such student'})
    }
  
    const student = await Student.findOneAndDelete({_id: id})
  
    if (!student) {
      return res.status(400).json({error: 'No such student'})
    }
  
    res.status(200).json(student)
}

// update a Student
const updateStudent = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such student'})
    }
  
    const student = await Student.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!student) {
      return res.status(400).json({error: 'No such student'})
    }
  
    res.status(200).json(student)
  }
  
  
  module.exports = {
    getStudents,
    getStudent,
    addStudent,
    deleteStudent,
    updateStudent
}