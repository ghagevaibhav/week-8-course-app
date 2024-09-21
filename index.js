const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

app.use(cors())
app.use(express.json())

app.post('/user/signup', (req, res) => {

})

app.post('/user/singin', (req, res) => {
    
})

app.get('/user/purchases', (req, res) => {

})

app.post("/course/purchase", (req, res) => {

})

app.get('/courses', (req, res) => {

})

