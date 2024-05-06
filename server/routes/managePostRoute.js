const express = require('express')
const {
  addPost,
  getPosts,
  getPost,
  deletePost,
  updatePost
} = require('../controllers/managePostController')
const Authenticate = require('../middleware/Authenticate')

const router = express.Router()

// require authenticate for all Post routes
router.use(Authenticate)

// GET all Posts
router.get('/', getPosts)

//GET a single Post
router.get('/:id', getPost)

// POST a new Post
router.post('/', addPost)

// DELETE a Post
router.delete('/:id', deletePost)

// UPDATE a Post
router.patch('/:id', updatePost)


module.exports = router