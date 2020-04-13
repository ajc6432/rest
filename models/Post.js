const mongoose = require('mongoose')

module.exports = mongoose.model('Posts', PostSchema)

const PostSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    author: String,
    title: String,    
    hint: String,
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
})