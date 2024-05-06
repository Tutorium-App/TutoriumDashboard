const mongoose = require('mongoose');

const Schema = mongoose.Schema

const managePostSchema = new Schema({
    postText: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    postUrl: {
        type: String,
        required: true
    },
}, {timestamps: true});

managePostSchema.statics.addPost = async function (postText, imageUrl, postUrl) {
  
    let emptyFields = []
  
    if(!postText) {
      emptyFields.push('postText')
    }
    if(!imageUrl) {
      emptyFields.push('imageUrl')
    }
    if(!postUrl) {
      emptyFields.push('postUrl')
    }
    if(emptyFields.length > 0) {
      return({ error: 'Please fill in all the fields', emptyFields })
    }
  
    // add doc to db
    try {
      const post = await this.create({postText, imageUrl, postUrl})
      return(post)
    } catch (error) {
      throw Error({error: error.message})
    }
}

const managePostModel = mongoose.model('ManagePost', managePostSchema);

module.exports = managePostModel;
