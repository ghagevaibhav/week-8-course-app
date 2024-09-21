const PORT = process.env.PORT 
const express = require('express')
const { userRouter } = require('./routes/user')
const { courseRouter } = require('./routes/course')
const app = express()

dotenv.config()

app.use(cors())
app.use(express.json())

app.use('/user', userRouter)
app.use('/course', courseRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})