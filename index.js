const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//middlewares
app.use(bodyParser.json()); 


//template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

//Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/users', usersRouter)
app.all('/', function(req, res) {
  res.render("home");
})

// route files
let users = require('./routes/users');
app.use('/', users);


//server
const server = app.listen(8000, function() {
    console.log(`Listening http://localhost:${server.address().port}`);
  });