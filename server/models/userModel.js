const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    lastLogin: {
        type: String,
        required: true
    }, 
}, {timestamps: true})

// static signup method
userSchema.statics.signup = async function (username, email, password) {

    if (!username || !email || !password) {
        throw Error("All Fields Are Required!!")
    }

    if (username.length < 5) {
        throw Error("Name Should Be More Than 5 Characters Long!!")
    }

    if (!validator.isEmail(email)) {
        throw Error("Invalid Email, Enter Correct Email")
    }

    if (!validator.isStrongPassword(password)) {
        throw Error("Password Is Not Strong")
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let currentDate = `${day}/${month}/${year}`;

    // const date = new Date();
    // let currentDate = date.toLocaleString(); 

    const user = await this.create({ username, email, password: hash, lastLogin: currentDate });

    return user;

}

// static login method
userSchema.statics.login = async function (email, password) {
    
    if (!email || !password) {
        throw Error("All Fields Are Required!!")
    }

    const user = await this.findOne({ email })
    if (!user) {
        throw Error("Incorrect Email")
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error("Incorrect Password")
    }

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}/${month}/${year}`;
    const update = { lastLogin: currentDate }

    // const date = new Date();
    // let currentDate = date.toLocaleString();
    // const update = { lastLogin: currentDate }

    const doc = await this.findOneAndUpdate(user, update, {
        returnOriginal: false
    });

    return user;

}

module.exports = mongoose.model('User', userSchema);