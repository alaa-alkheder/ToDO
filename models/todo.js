const Joi = require('joi');
const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    body: {
        type: String,
        required: false,
        minlength: 5,
        maxlength: 500
    },

}));


exports.Todo = Todo;