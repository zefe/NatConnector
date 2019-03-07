const express = require("express")
const router = express.Router()

//traemos el modelo de usuarios
let usersData = require('../utils/users');

//Register form
router.get("/signin", function(req, res){
    res.render("signin");
});

//Register process
router.post('/signin', function(req, res){
    let user_name=req.body.name;
    let email =req.body.email;
    let password=req.body.password;
  
    console.log("User name = "+user_name+", password is "+password);
  
    usersData.unshift({name: user_name, email: email, password: password })
  
    console.log(usersData);
    res.redirect('/login')

});

router.get('/login', function(req, res){
    res.render('login')
})


module.exports = router;