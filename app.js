const express = require('express')
const app = express()

const morgan = require('morgan')
app.use(morgan('combined'))

const mongoose = require('mongoose')

require('dotenv/config')

// middlewares

const postsRouter =  require('./routers/posts')
app.use('/posts', postsRouter)

// basic routers

app.get("/", (req, rsp) => {
    console.log("Responding to root")
    rsp.send("go away")
})

app.get("/users", (req, rsp) => {
    console.log("Responding to users")
    var users = [{name: "Sebastian", id: "1"}, {name: "Steve", id: "2"}, {name: "Dan", id: "3"}]
    
    rsp.send(users)
})

// connect to db
mongoose.connect(process.env.DB_ADDRESS, { useNewURLParser: true },  () => {
    console.log('connected to remote db, bishhhhh')
})

//start listening
app.listen(3003, () => {
    console.log("Serving running and listening on 3003...")
})