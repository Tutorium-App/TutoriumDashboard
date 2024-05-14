const mongoose = require('mongoose');

const Schema = mongoose.Schema

const adsSchema = new Schema({
    adsTitle: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    adsURL: {
        type: String,
        required: true
    },
    clickCount: {
      type: Number,
      required: true
    },
    school: {
      type: String,
      required: true
  },
}, {timestamps: true});

adsSchema.statics.addPost = async function (adsTitle, imageUrl, adsURL, clickCount, school) {
  
    let emptyFields = []
  
    if(!adsTitle) {
      emptyFields.push('adsTitle')
    }
    if(!imageUrl) {
      emptyFields.push('imageUrl')
    }
    if(!adsURL) {
      emptyFields.push('adsURL')
    }
    if(!clickCount) {
      emptyFields.push('clickCount')
    }
    if(!school) {
      emptyFields.push('school')
    }
    if(emptyFields.length > 0) {
      return({ error: 'Please fill in all the fields', emptyFields })
    }
  
    // add doc to db
    try {
      const post = await this.create({adsTitle, imageUrl, adsURL, clickCount, school})
      return(post)
    } catch (error) {
      throw Error({error: error.message})
    }
}

const adsModel = mongoose.model('ads', adsSchema);

module.exports = adsModel;
