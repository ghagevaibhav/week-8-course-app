const { Router } = require('express')
const AdminModel = require('../db/db')
const adminRouter = Router()

adminRouter.post('/signup', (req, res) => {

})

adminRouter.post('/signin', (req, res) => {

})

adminRouter.post('/course', (req, res) => {

})

adminRouter.put('/course/:id', (req, res) => {

})

adminRouter.get('/course/bulk', (req, res) => {

})

module.exports = {
    adminRouter : adminRouter
}







