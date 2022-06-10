const bookModel= require("../models/bookModel")
const authorModel = require("../models/authorModel")
const PublisherModel = require("../models/PublisherModel");

const createAuthor= async function (req, res) {
    let data = req.body
    let authorCreated = await authorModel.create(data)
    res.send({msg: authorCreated})
}
const createPublisher= async function (req, res) {
    let data = req.body
    let publisherCreated = await PublisherModel.create(data)
    res.send({msg: publisherCreated})
}

const createBook= async function (req, res) {
    let data = req.body

  if(!data.author) res.send("please enter the AuthorId")
  let author=await authorModel.findById(data.author);
  if(!author) res.send("please enter correct author_id")

  if (!data.publisher) res.send("please enter the publisherId")
  let publisher=await PublisherModel.findById(data.publisher);
  if(!publisher) res.send("please enter correct publisher_id")

  let savedData = await bookModel.create(data)
    res.send({msg: savedData})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate("author").populate("publisher")
    res.send({data: specificBook})

}
// const updateKeys= async function(req,res){
// let data=await PublisherModel.find({publisher_name:{$in:["Penguin" ,"HarperCollins"]}}).update({})
// }

module.exports.createPublisher=createPublisher
module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
//module.exports.updateKeys=updateKeys
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
