// console.log("Welcome to Express Js")
// 1st step is to import the server

import express from 'express'
import path from 'path'
// const express = require('express')
//create an express app
const app = express()
const router = express.Router()

app.use(router,
    express.static('./static')
)
const port = +process.env.PORT || 4000
//Router
router.get('/$|/express',display ,(req,res)=>{
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})
router.get('/about', (req, res)=>{clear
    res.json({
        status: res.statusCode,
        msg: 'About Page'
    })
})
//middlaware
function display(req, res, next){
     console.log("Hello there");
     next()
}
// For running the port server
// last step
app.listen(port)
