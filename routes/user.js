const { Router} = require('express')
const UserModel = require('../db/db')
const userRouter = Router();

userRouter.post('/signup', (req, res) => {

})

userRouter.post('/singin', (req, res) => {

})

userRouter.get('/purchases', (req, res) => {

})

module.exports = {
    userRouter : userRouter
}
