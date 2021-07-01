const {Todo} = require('../models/todo');
const mongoose = require('mongoose');
const express = require('express');
const {User} = require('../models/user');
const router = express.Router();



// Get all todo for specific user
router.get('/usertodo/:id', async (req, res) => {
    const todo=await User.findById(req.params.id).populate('todo').select('todo')
    res.json(todo)
});


//Add new todo.for specific user
router.post('/', async (req, res) => {
// define new Todo
    let todo = new Todo({
        title: req.body.title,
        body: req.body.body,
        user: req.body.user,
    });
    //save in dataBsae
    todo = await todo.save();
    //get the user
    const user = await  User.findById(req.body.user)
    //push the todo to user
    user.todo.push(todo)
    //save user
    await user.save();
    res.send(todo);
});

//Update an existing todo for specific user.
router.put('/edit', async (req, res) => {
    //get todo from database
    const todo=await Todo.findById(req.body.todoId)
    //check todo is found
    if (!todo) return res.status(400).send('todo not found.');
    //update information
    todo.title=req.body.title
    todo.body=req.body.body
    //save in database
    todo.save();
    //send to user
    res.json(todo)
});

//Delete an existing todo for specific user.
router.delete('/delete', async (req, res) => {
    const todo=await Todo.findById(req.body.todoId)
    //check todo is found
    if (!todo) return res.status(400).send('todo not found.');
    //Delete todo in database
    todo.delete();
    //send to user
    res.json('todo : '+todo.title+ ' was deleted')
});

//Get todo information for specific user
router.get('/get/:id', async (req, res) => {
    //get todo from database
    const todo = await Todo.findById(req.params.id)
    //check todo is found
    if (!todo) return res.status(400).send('todo not found.');
    //send to user
    res.json(todo)
});


module.exports = router;