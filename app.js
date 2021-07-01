const express = require('express');


const app=express();


// start app environments
require('./startup/routes')(app);
require('./startup/db')();


const port = process.env.PORT || 3000;
const server = app.listen(port,async () => {
    console.log(`Listening on port ${port}...`);
    console.log('******************************************************************************');

});
module.exports = server;