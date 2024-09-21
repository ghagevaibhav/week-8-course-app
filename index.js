const PORT = process.env.PORT 
const express = require('express')
const { userRouter } = require('./routes/user')
const { courseRouter } = require('./routes/course')
const { adminRouter } = require('./routes/admin')
const app = express()


app.use('/user', userRouter)
app.use('/admin', adminRouter)
app.use('/course', courseRouter)
async function main(){
    await mongoose.connect("mongodb+srv://admin:oMeyMiDShQNaLpUT@cluster0.cdutnom.mongodb.net/coursera_app")
    app.listen(PORT)
}
main()