const book = require("../models/bookModel")
const authorModel=require("../models/authorModel")
const createBooks= async function (req, res) {
    let data= req.body
    let savedData= await book.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let authordata= req.body
    let savedAuthorData= await authorModel.create(authordata)
    res.send({msg: savedAuthorData})
}
const authoridandBooks=async function(req,res){
    
    let AuthorIdData=await authorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    let booksByBhagat=await book.find({author_id:AuthorIdData[0].author_id})
    
    res.send({msg:booksByBhagat})
}
const bookAuthor=async function(req,res){
    let data=await book.findOneAndUpdate({name:"Two States"},{$set:{prices:100}},{new:true})
    let authorData=await authorModel.find({author_id:data.author_id}).select("author_name")
    let price=data.prices
    res.send({msg:authorData,price})
}

const bookCostBtW=async function(req,res){
    let priceBtw=await book.find({prices:{$gte:50,$lte:100}}).select({author_id:1})
    let empArr=[]
    for (let i of priceBtw){
        let d=await authorModel.find({author_id:i.author_id}).select({author_name:1,_id:0})
        empArr.push(d)
    }
res.send({msg:empArr})
}

module.exports.bookCostBtW=bookCostBtW
module.exports.createBooks=createBooks
module.exports.createAuthor=createAuthor
module.exports.bookAuthor=bookAuthor
module.exports.authoridandBooks=authoridandBooks


/*const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let savedData=await bookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg: savedData})
}
const getBooksInYear= async function (req, res) {
    let year=req.body.year
    let findByYear=await bookModel.find({"year":year})
    
    res.send({msg: findByYear})
}
const getParticularBooks= async function (req, res) {
    let particularBook=req.body
  let  bookByKey=await bookModel.find(particularBook)
    res.send({msg: bookByKey})
}
const getXINRBooks= async function (req, res) {
    let bookPrice=await bookModel.find({"prices.indianPrice":{$in:["100INR","200INR","500INR"]}})
    res.send({msg: bookPrice})
}
const getRandomBooks= async function (req, res) {
bookAvilable=await bookModel.find({stockAvailabl:true,totalPages:{$gt:500}})
    res.send({msg: bookAvilable})
}

module.exports.getRandomBooks=getRandomBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getParticularBooks=getParticularBooks
module.exports.createBook=createBook
module.exports.bookList=bookList
module.exports.getBooksInYear=getBooksInYear*/
    // let allBooks= await BookModel.find( ).count() // COUNT

    // let allBooks= await BookModel.find( { authorName : "Chetan Bhagat" , isPublished: true  } ) // AND
    
    // let allBooks= await BookModel.find( { 
    //     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
    // } ).select( { bookName: 1, authorName: 1, _id: 0})n // SELECT keys that we want

    // let allBooks= await BookModel.find().sort( { sales: -1 }) // SORT

    // PAGINATION 
    // let page= req.query.page
    // let allBooks= await BookModel.find().skip(3 * (page-1)).limit(3)

    // let allBooks= await BookModel.find().sort({ sales: -1 }).skip(3 * (page-1)).limit(3).select({ bookName: 1, authorName: 1, _id: 0} )


    // let allBooks= await BookModel.find({ sales: { $eq:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $ne:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lte:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gte:  50 }  }) 
    
    // let allBooks= await BookModel.find({     sales : { $in: [10, 17, 82] }     }).count() 
    // sales : { $in: [10, 17, 82] }
    
    // let allBooks= await BookModel.find({     sales : { $nin: [ 17, 82, 137] }     }).select({ sales: 1, _id:0})
    
    //  let allBooks= await BookModel.find({     $and: [{sales : {$gt: 20}} , [sales:  {$lt: 100}]]    })  //sales is between 20 and 100.... sales > 20 AND sales <100
    //  let allBooks= await BookModel.find({     sales : {$gt: 20, $lt: 100}   })  //sales is between 20 and 100.... sales > 20 AND sales <100


    //  let allBooks= await BookModel.findById("621c60a6b16c9e6bf2736e33") 
    //  let allBooks= await BookModel.findOne( {sales: 10}) 
    //  let allBooks= await BookModel.find( {sales: 10}) 
    
    

    // //  update (not covered: - findByIdAndUpdate | updateOne )
    // let allBooks= await BookModel.update(   
    //     {  sales: {$gt: 10}  }, //condition
    //     { $set: { isPublished: true} } // the change that you want to make
    //     ) 



    // REGEX
    // let allBooks= await BookModel.find( { bookName:  /^Int/  }) 
    // let allBooks= await BookModel.find( { bookName:  /^INT/i  }) 
    // let allBooks= await BookModel.find( { bookName:  /5$/  }) 
    // let allBooks= await BookModel.find( { bookName:  /.*Programming.*/i  }) 
    
    // ASYNC AWAIT
    
   // let a= 2+4
    //a= a + 10
    //console.log(a)
    //let allBooks= await BookModel.find( )  //normally this is an asynchronous call..but await makes it synchronous


    // WHEN AWAIT IS USED: - database + axios
    //  AWAIT can not be used inside forEach , map and many of the array functions..BE CAREFUL
    //console.log(allBooks)
    //let b = 14
    //b= b+ 10
    //console.log(b)
    //res.send({msg: allBooks})}


