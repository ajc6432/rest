const express = require('express')
const User = require('../models/user')

const router = express.Router()

// routes
router.get('/', (req, rsp) => {
  console.log('Responding to users')
  rsp.send('users')
})

router.get('/all', async (req, rsp) => {
  console.log('Fetching all users')
  try {
    const posts = await User.find()
    rsp.json(posts)
  } catch (err) {
    rsp.json({ message: err })
  }
})

router.post('/add', async (req, rsp) => {
  console.log('trying to add new user...')
  const user = new User({
    name: req.body.name
  })

  try {
    const savedUser = await user.save()
    rsp.json(savedUser)
  } catch (err) {
    rsp.json({ message: err })
  }
})

module.exports = router
