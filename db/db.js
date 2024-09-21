const { mongoose } = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
mongoose.connect("mongodb+srv://admin:oMeyMiDShQNaLpUT@cluster0.cdutnom.mongodb.net/coursera_app")

const userSchema = new mongoose.Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lasttName: String,
})

const adminSchema = new mongoose.Schema({
    firstName: String,
    lasttName: String,
    email: {type: String, unique: true},
    password: String
})

const courseSchema = new mongoose.Schema({
    title: String,  
    description: String,
    price: Number,
    imageURL: String,
    creatorId: ObjectId
})

const purchaseSchema = new mongoose.Schema({
    userId: ObjectId,
    courseId: ObjectId
})

const UserModel = mongoose.model('User', userSchema)
const AdminModel = mongoose.model('Admin', adminSchema)
const CourseModel = mongoose.model('Course', courseSchema)
const PurchaseModel = mongoose.model('Purchase', purchaseSchema)



module.exports = {
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModel
}
