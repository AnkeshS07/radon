const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: {type:String,
    required:true},
    isHardCover:{
        type:Boolean,default:false
    },
    author_id: {
        type: ObjectId,
        ref: "NewAuthor"
    },
    publisher_id:{
        type:ObjectId,
        ref:"NewPublisher"
    },
    price: Number,
    ratings: Number


}, { timestamps: true });


module.exports = mongoose.model('NewBook', bookSchema)
