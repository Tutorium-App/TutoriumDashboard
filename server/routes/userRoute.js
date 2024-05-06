const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/login', userController.login_post);
router.post('/signup', userController.signup_post);
// GET all Students
router.get('/allUsers', userController.getUsers);
// DELETE a Student
router.delete('/:id', userController.deleteUser);

module.exports = router