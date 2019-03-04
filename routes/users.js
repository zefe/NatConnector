const express = require("express")
const router = express.Router()

//traemos el modelo de usuarios
let User = require('../utils/users');

//Register form
router.get("/register", function(req, res){
    res.render("register");
});

//Register process
router.post('/register', function(req, res){
    
    console.log(req.body)
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    let newUser = [{
        name: '',
        email: '',
        password: ''
    }];

    


    res.redirect('/users/login')

});

router.get('/login', function(req, res){
    res.render('login')
})


module.exports = router;