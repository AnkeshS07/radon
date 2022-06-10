const express = require('express');
const router = express.Router();

//const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController");


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", bookController.createAuthor  )

//router.get("/getAuthorsData", bookController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.post("/createPublisher",bookController.createPublisher)

//router.put("/Book", bookController.Book)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;