const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema( {
    Name: String, 
    author_id:{type:Number,
        required:true},
    prices:Number,
ratings:Number
}, { timestamps: true })
module.exports = mongoose.model('BookModel', bookSchema)

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
