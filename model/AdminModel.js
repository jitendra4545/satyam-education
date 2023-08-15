const mongoose=require('mongoose')

const adminSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    confirm_password:String
},{
    versionKey:false,
    timestamps:true
})


const adminModel=mongoose.model("admin",adminSchema)


module.exports={
    adminModel
}