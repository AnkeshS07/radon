const authorModel1 = require("../models/authorModel")
const bookModel1= require("../models/bookModel")
const PublisherModel = require("../models/PublisherModel")

const createBook= async function (req, res) {
    let book = req.body

    let bookCreated = await bookModel1.create(book)
    res.send({msg: bookCreated})
}

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await authorModel1.create(author)
    res.send({msg: authorCreated})
}
const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await PublisherModel.create(publisher)
    res.send({msg: publisherCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}
module.exports.createPublisher=createPublisher
module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
