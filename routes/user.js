
const express = require('express')
const router = express.Router()

const userRouter = router();

userRouter.post('/user/signup', (req, res) => {

})

userRouter.post('/user/singin', (req, res) => {

})

userRouter.get('/user/purchases', (req, res) => {

})

module.exports = {
    userRouter : userRouter
}
