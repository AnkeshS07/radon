const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema( {
  Name:String,
  category:String,
  price:{type:Number,
    required:true}

// summary :  mongoose.Schema.Types.Mixed,
}, { timestamps: true });


module.exports = mongoose.model('Product', ProductSchema)


