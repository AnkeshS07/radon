const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: {type:String,
    required:true},
   
    author: {
        type: ObjectId,
        ref: "NewAuthor"
    },
    price: Number,
    publisher:{
        type:ObjectId,
        ref:"NewPublisher"
    },

    isHardCover:{
        type:Boolean,default:false
    },
    ratings: Number


}, { timestamps: true });


module.exports = mongoose.model('NewBook', bookSchema)
