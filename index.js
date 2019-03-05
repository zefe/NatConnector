const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const usersData = require('./utils/users')

const app = express();

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

app.get('/',function(req,res){
  res.sendfile("views/index.html");
});
app.post('/signin',function(req,res){
  let user_name=req.body.name;
  let email =req.body.email;
  let password=req.body.password;

  console.log("User name = "+user_name+", password is "+password);

  usersData.unshift({name: user_name, email: email, password: password })

  console.log(usersData);
  alert('Sucess full', user_name+ " "+ email)
  res.redirect('/usuarios');
});

app.all('/usuarios', (req, res) => {
  res.send(usersData)
  res.end()
})


//server
const server = app.listen(8000, function() {
    console.log(`Listening http://localhost:${server.address().port}`);
  });