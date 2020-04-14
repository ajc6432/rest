const express = require('express')
const Post = require('../models/post')

const router = express.Router()

// routes
router.get('/', (req, rsp) => {
  console.log('Responding to posts')
  rsp.send('posts')
})

// get all posts
router.get('/all', async (req, rsp) => {
  console.log('Fetching all posts')
  try {
    const posts = await Post.find()
    rsp.json(posts)
  } catch (err) {
    rsp.json({ message: err })
  }
})

// get specific post
router.get('/:postID', async (req, rsp) => {
  const id = req.params.postID
  console.log('Fetching post with id: ' + id)
  try {
    const post = await Post.findById(id)
    rsp.json(post)
  } catch (err) {
    rsp.json({ message: err })
  }
})

// add post
router.post('/add', (req, rsp) => {
  console.log('trying to add new post...')
  const newPost = new Post({
    title: req.body.title,
    author: req.body.author,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  })

  newPost.save()
    .then(data => {
      console.log('successfully added post')
      rsp.json(data)
    }).catch(err => {
      console.log('error adding post')
      rsp.json({ message: err })
    })
})

// update specific post by id
router.patch('/update/:postID', async (req, rsp) => {
  const id = req.params.postID
  const newTitle = req.headers.title
  try {
    const updatedPost = await Post.updateOne(
      { _id: id },
      { $set: { title: newTitle } }
    )
    rsp.json(updatedPost)
  } catch (err) {
    rsp.json(err)
  }
})

// delete specific post by id
router.patch('/update/:postID', async (req, rsp) => {
  try {
    const deletedPost = await Post.remove({ _id: req.params.postID })
    rsp.json(deletedPost)
  } catch (err) {
    rsp.json(err)
  }
})

module.exports = router
