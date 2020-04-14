const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const PostSchema = mongoose.Schema({
  id: {
    type: String,
    default: uuidv4()
  },
  author: String,
  title: String,
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

module.exports = mongoose.model('Posts', PostSchema)
