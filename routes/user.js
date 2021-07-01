const {User} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


//get all user
router.get('/', async (req, res) => {
    const user =await User.find().populate('todo')
    res.json(user)
});

//add new user
router.post('/', async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    });
    user = await user.save();

    res.send(user);
});

module.exports = router;