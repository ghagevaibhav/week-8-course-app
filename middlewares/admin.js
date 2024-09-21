const AdminModel = require('../db/db')

async function adminMiddleware (req, res, next){
    const username = req.headers.username
    const password = req.headers.password
    const admin = await AdminModel.findOne({username, password})
    if(!admin){
        return res.status(403).json({message: 'Unauthorized'})
    }
    next()
}


module.exports = adminMiddleware