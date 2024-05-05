const Post = require('../models/managePostModel')
const mongoose = require('mongoose')


// get all Posts
const getPosts = async (req, res) => {
    const post_id = req.body.id
  
    const posts = await Post.find({post_id}).sort({createdAt: -1})
  
    res.status(200).json(posts)
}

// get a single Post
const getPost = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such post'})
    }
  
    const post = await Post.findById(id)
  
    if (!post) {
      return res.status(404).json({error: 'No such post'})
    }
    
    res.status(200).json(post)
}

// create new Post
const addPost = async (req, res) => {
    const {postText, imageUrl, postUrl} = req.body
    
    try {
        const post = await Post.addPost(postText, imageUrl, postUrl);
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a Post
const deletePost = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such post'})
    }
  
    const post = await Post.findOneAndDelete({_id: id})
  
    if (!post) {
      return res.status(400).json({error: 'No such post'})
    }
  
    res.status(200).json(post)
}

// update a Post
const updatePost = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such post'})
    }
  
    const post = await Post.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!post) {
      return res.status(400).json({error: 'No such post'})
    }
  
    res.status(200).json(post)
  }
  
  
  module.exports = {
    getPosts,
    getPost,
    addPost,
    deletePost,
    updatePost
}