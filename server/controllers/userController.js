const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')

const createtoken = (_id) => {
    try {
        // Create and sign the JWT
        const token = jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1w' });
        return token;
      } catch (error) {
        // Handle any errors that occur during token creation
        console.error('Error creating JWT:', error);
        return null; // You may choose to return null or throw an error here
      }
}

const login_post = async (req, res) => {
    
    const {email, password} = req.body
    
    try {
        const user = await User.login(email, password)
        const username = user.username
        const lastLogin = user.lastLogin

        // Creating token
        const token = createtoken(user._id)
        
        res.status(200).json({ username, email, lastLogin, token })

    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

const signup_post = async (req, res) => {
    
    const {username, email, password} = req.body
    try {
        const user = await User.signup(username, email, password)
        const lastLogin = user.lastLogin

        // Creating token
        const token = createtoken(user._id)
        
        res.status(200).json({ username, email, lastLogin, token })

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// get all Users
const getUsers = async (req, res) => {
    const user_id = req.body.id
  
    const users = await User.find({user_id}).sort({createdAt: -1})
  
    res.status(200).json(users)
}

// delete a User
const deleteUser = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such user'})
    }
  
    const user = await User.findOneAndDelete({_id: id})
  
    if (!user) {
      return res.status(400).json({error: 'No such user'})
    }
  
    res.status(200).json(user)
}

module.exports = {
    login_post,
    signup_post,
    getUsers,
    deleteUser
}