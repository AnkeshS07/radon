const express = require('express');
const router = express.Router();
//const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const bookDetails=require("../controllers/userController")

/*router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})*/

//router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)

router.post("/createBookDetails",UserController.createBookDetails)
router.get("/getBookDetails",UserController.getBookDetails)
module.exports = router;
