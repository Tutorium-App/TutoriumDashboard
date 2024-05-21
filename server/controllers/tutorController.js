const Tutor = require('../models/tutor.model')
const mongoose = require('mongoose')


// get all Tutors
const getTutors = async (req, res) => {
    const tutor_id = req.body.id
  
    const tutors = await Tutor.find({tutor_id}).sort({createdAt: -1})
  
    res.status(200).json(tutors)
}

// get a single Tutor
const getTutor = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such tutor'})
    }
  
    const tutor = await Tutor.findById(id)
  
    if (!tutor) {
      return res.status(404).json({error: 'No such tutor'})
    }
    
    res.status(200).json(tutor)
}

// create new Tutor
const addTutor = async (req, res) => {
    const {tutorID, fullName, email, phone, school, program, year, about, balance, rating, verified, profilePhotoLink} = req.body
    
    try {
        const tutor = await Tutor.addTutor(tutorID, fullName, email, phone, school, program, year, about, balance, rating, verified, profilePhotoLink);
        res.status(200).json(tutor)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a Tutor
const deleteTutor = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such tutor'})
    }
  
    const tutor = await Tutor.findOneAndDelete({_id: id})
  
    if (!tutor) {
      return res.status(400).json({error: 'No such tutor'})
    }
  
    res.status(200).json(tutor)
}

// update a Tutor
const updateTutor = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such tutor'})
    }
  
    const tutor = await Tutor.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!tutor) {
      return res.status(400).json({error: 'No such tutor'})
    }
  
    res.status(200).json(tutor)
  }
  
  
  module.exports = {
    getTutors,
    getTutor,
    addTutor,
    deleteTutor,
    updateTutor
}