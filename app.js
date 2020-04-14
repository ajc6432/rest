const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const morgan = require('morgan')
app.use(morgan('combined'))

const mongoose = require('mongoose')

require('dotenv/config')

// middlewares

const postsRouter = require('./routers/posts')
app.use('/posts', postsRouter)

const usersRouter = require('./routers/users')
app.use('/users', usersRouter)

// basic routers
app.get('/', (req, rsp) => {
  console.log('Responding to root')
  rsp.send('go away')
})

// connect to db
mongoose.connect(process.env.DB_ADDRESS, { useNewURLParser: true }, () => {
  console.log('connected to remote db')
})

// start listening
app.listen(3003, () => {
  console.log('Serving running and listening on 3003...')
})
