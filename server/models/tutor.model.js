const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema

const tutorSchema = new Schema({
    tutorID: {
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
    about: {
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
    balance: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    numberOfRatings: {
      type: Number,
      required: true
    },
    sales: {
      type: Number,
      required: true
    },
    verified: {
        type: String,
        required: true
    },
    profilePhotoLink: {
        type: String,
        required: true
    }
}, {timestamps: true});

tutorSchema.statics.addTutor = async function (tutorID, fullName, email, phone, school, program, year, about, balance, rating, verified, profilePhotoLink) {
  
    let emptyFields = []
  
    if(!tutorID) {
      emptyFields.push('tutorID')
    }
    if(!fullName) {
      emptyFields.push('fullName')
    }
    if(!email) {
      emptyFields.push('email')
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
    if(!about) {
      emptyFields.push('about')
    }
    if(!balance) {
      emptyFields.push('balance')
    }
    if(!rating) {
      emptyFields.push('rating')
    }
    if(!verified) {
      emptyFields.push('verified')
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
      const tutor = await this.create({tutorID, fullName, email, phone, school, program, year, about, balance, rating, verified, profilePhotoLink})
      return(tutor)
    } catch (error) {
      throw Error({error: error.message})
    }
}

const tutorModel = mongoose.model('Tutors', tutorSchema);

module.exports = tutorModel;
