
const UserModel = require('../db/db')

async function userMiddleware(req, res, next){

    const username = req.headers.username
    const password = req.headers.password
    const user = await UserModel.findOne({username, password})
    if(!user){
        return res.status(403).json({message: 'Unauthorized'})
    }
    next()
}

module.exports = userMiddleware