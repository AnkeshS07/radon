const mongoose = require('mongoose');
const ObjectId =mongoose.Schema.Types.ObjectId
const OrderSchema = new mongoose.Schema( {
    userId:{
        type:ObjectId,
        ref:"User",
        required:true
    },
    productId:{
        type:ObjectId,
        ref:"Product",
        required:true
    },
    amount:{
        type:Number
    },
    isFreeAppUser:{type:Boolean,
        default:false},
    date:String

}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema)