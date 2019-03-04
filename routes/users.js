const express = require("express")
const router = express.Router()

const users = [
    {
        name: "zefe1",
        email: "zefe1@test.com",
        password: "helloword1"
    },
    {
        name: "zefe2",
        email: "zefe2@test.com",
        password: "helloword2"
    }
];

router.get("/", function(req, res){
    res.render("users", { users });
});



module.exports = router;