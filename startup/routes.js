const express = require('express');
const users =require('../routes/user')
const todo =require('../routes/todo')

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/users', users);
  app.use('/api/todo', todo);
}