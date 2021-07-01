const mongoose= require('mongoose')
const config = require('config');


//here we connect with DataBase
//you can change database URL from config/default.json

module.exports =async function() {
    mongoose.connect(config.get('db'))
        .then(() => console.log('connected to MongoDB'))
        .catch(err => console.error('could not connect to mongoDB...', err))
}