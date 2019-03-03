const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send({name: 'Hello word', lastname: 'Sea horse'})
})

//server
const server = app.listen(8000, function() {
    console.log(`Listening http://localhost:${server.address().port}`);
  });