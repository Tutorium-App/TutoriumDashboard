require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute');
const tutorRoutes = require('./routes/tutorRoute');
const studentRoutes = require('./routes/studentRoute');
const managePostRoutes = require('./routes/managePostRoute');

// Creating Express app
const app = express();

// Middlewares
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/user', userRoutes);
app.use('/api/tutors', tutorRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/managePost', managePostRoutes);

// Connection to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listening for request
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT} & MongoDB conected!!`);
        })
    })
    .catch((error) => {
        console.log(error);
    })