// console.log("Welcome to Express Js")
// 1st step is to import the server
import { json } from 'body-parser'
import express from 'express'
import path from 'path'
// const express = require('express')
//create an express app
const app = express()
const router = express.Router()
const port = +process.env.PORT || 4000
app.use(router,
    express.static('./static')
)
//Router
router.get('/$|/express',display ,(req,res)=>{
    res.json
    //    res.status(200).json({
    //     msg: 'You\'re home'
    //    })
    res.json({
        status: res.statusCode,
        msg: 'You\'re home'
    })
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
