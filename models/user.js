const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },

    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    todo:[{
        type:mongoose.Schema.ObjectId,
        ref:"Todo"
    }]
}));


exports.User = User;