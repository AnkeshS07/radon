//const UserModel= require("../models/userModel")
const BookDetails=require("../book/bookDetails.js")

/*const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})}*/

/*const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})}*/
const createBookDetails=async function(req,res){
    let bookdata=req.body
    let savedbookData=await BookDetails.create(bookdata)
    res.send({msg:savedbookData})
}
const getBookDetails=async function(req,res){
    let allbookData=await BookDetails.find()
    res.send({msg:allbookData})}

/*module.exports.createUser= createUser
module.exports.getUsersData= getUsersData*/
module.exports.createBookDetails=createBookDetails
module.exports.getBookDetails=getBookDetails
