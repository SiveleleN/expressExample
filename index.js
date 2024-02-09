// console.log("Welcome to Express Js")
import express from 'express'
// const express = require('express')

//create an express app
const app = express()
const port = +process.env.PORT || 4000 
//Router

app.get('/',(req,res)=>{
    //    res.status(200).json({
    //     msg: 'You\'re home'
    //    })
    res.json({
        status: res.statusCode,
        msg: 'You\'re home'
    })
})
app.get('/about', (req, res)=>{clear
    res.json({
        status: res.statusCode,
        msg: 'About Page'
    })
})
app.all('*', (req, res)=>{
    res.json({
        status: 404,
        msg: '404 page'
    })
})

app.listen(port)
