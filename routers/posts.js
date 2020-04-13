const express = require('express')
const router = express.Router()

module.exports = router

// routes
router.get("/", (req, rsp) => {
    console.log("Responding to posts")    
        rsp.send('posts')
})


router.get("/all", (req, rsp) => {
    console.log("Responding to posts")    
    rsp.send('ALL THE POSTS')
})