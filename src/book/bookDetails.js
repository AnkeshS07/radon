const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema( {
    BookName: String,
    AuthorName: String,
    category:String,
    year:Number,
}, { timestamps: true });

module.exports = mongoose.model('BookDetails',bookSchema)
