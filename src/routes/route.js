const express = require('express');
const router = express.Router();
const bookController= require("../controllers/bookController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBooks",bookController.createBooks)
router.post("/createAuthor",bookController.createAuthor)
router.post("/authoridandBooks",bookController.authoridandBooks)
router.post("/bookAuthor",bookController.bookAuthor)
router.post("/bookCostBtW",bookController.bookCostBtW)

module.exports = router;

/*router.post("/createBook", BookController.createBook  )
router.get("/booklist", BookController.bookList)
router.post("/getBooksInYear", BookController.getBooksInYear)
router.get("/getParticularBooks", BookController.getParticularBooks)
router.get("/getXINRBooks", BookController.getXINRBooks)
router.get("/getRandomBooks", BookController.getRandomBooks)*/