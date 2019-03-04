const express = require('express')
const path = require('path')
const app = express()

// const usersRouter = require('./routes/users')

let users = [
    {
        id: 1,
        name: "zefe1",
        email: "zefe1@test.com",
        password: "helloword1"
    },
    {
        id: 2,
        name: "zefe2",
        email: "zefe2@test.com",
        password: "helloword2"
    }
];

//template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// app.use('/users', usersRouter)

//Set public folder
app.use(express.static(path.join(__dirname, 'public')));

//Home route
app.get("/", function(req, res) {
    res.render("users", { users })
})


//get single user
app.get('/user/:id', function(req, res){
    const { userId } = req.params;

    res.render('user', { user})
    
    res.status(200).json({
        data: users[0],
        message: 'userId retrieved'
    });
})

//add route
app.get("/add/user", function(req, res){
    res.render("add_user", {
        title: 'New user'
    });
});

//server
const server = app.listen(8000, function() {
    console.log(`Listening http://localhost:${server.address().port}`);
  });