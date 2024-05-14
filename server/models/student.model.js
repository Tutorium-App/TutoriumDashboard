const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema

const studentSchema = new Schema({
    studentID: {
        type: String,
        unique: true,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    dateCreated: {
      type: String,
      required: true
    },
    school: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    numberOfVideos: {
      type: Number,
      required: true
    },
    numberOfServices: {
      type: Number,
      required: true
    },
    profilePhotoLink: {
        type: String,
        required: true
    }
}, {timestamps: true});

studentSchema.statics.addStudent = async function (studentID, fullName, email, phone, dateCreated, school, program, year, numberOfServices, numberOfVideos, profilePhotoLink) {
  
    let emptyFields = []
  
    if(!studentID) {
      emptyFields.push('studentID')
    }
    if(!fullName) {
      emptyFields.push('fullName')
    }
    if(!email) {
      emptyFields.push('email')
    }
    if(!dateCreated) {
      emptyFields.push('dateCreated')
    }
    if(!phone) {
      emptyFields.push('phone')
    }
    if(!school) {
      emptyFields.push('school')
    }
    if(!program) {
      emptyFields.push('program')
    }
    if(!year) {
      emptyFields.push('year')
    }
    if(!numberOfServices) {
      emptyFields.push('numberOfServices')
    }
    if(!numberOfVideos) {
      emptyFields.push('numberOfVideos')
    }
    if(!profilePhotoLink) {
      emptyFields.push('profilePhotoLink')
    }
    if(emptyFields.length > 0) {
      return({ error: 'Please fill in all the fields', emptyFields })
    }

    if(!validator.isEmail(email)) {
        throw Error("Invalid Email")
    }
  
    // add doc to db
    try {
      const tutor = await this.create({studentID, fullName, email, phone, dateCreated, school, program, year, numberOfServices, numberOfVideos, profilePhotoLink})
      return(tutor)
    } catch (error) {
      throw Error({error: error.message})
    }
}

const studentModel = mongoose.model('Students', studentSchema);

module.exports = studentModel;
