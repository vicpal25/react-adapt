const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const blogSchema = new Schema({
    title: { type: String },
    content: String,
    author: String
})

const ModelClass = mongoose.model('blogEntry', blogSchema);


module.exports = ModelClass;