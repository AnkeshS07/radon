const mongoose = require('mongoose'); 

const PublisherSchema = new mongoose.Schema( {
    publisher_name: String,
    headQuarter:String

}, { timestamps: true });

module.exports = mongoose.model('NewPublisher', PublisherSchema)
