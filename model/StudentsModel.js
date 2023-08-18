const mongoose=require('mongoose')


const StudentAdmission=mongoose.Schema({
  name:String,
  father_name:String,
  mother_name:String,
  dob:String,
  gender:String,
  address:String,
  category:String,
  email:String,
   pnumber:Number,
   anumber:Number,
   course:String,
    methodology1:String,
    methodology2:String,
    photo1: {data:Buffer,contentType:String },
    photo2: {data:Buffer,contentType:String },
    photo3: {data:Buffer,contentType:String },
    photo4: {data:Buffer,contentType:String },
    photo5: {data:Buffer,contentType:String },
    photo6: {data:Buffer,contentType:String },
    photo7: {data:Buffer,contentType:String },
    photo8: {data:Buffer,contentType:String },
    photo9: {data:Buffer,contentType:String },
    photo10: {data:Buffer,contentType:String },
    photo11: {data:Buffer,contentType:String },
    photo12: {data:Buffer,contentType:String },
    stream1:String,
    stream2:String,
    stream3:String,
    stream4:String,
    board1:String,
    board2:String,
    board3:String,
    board4:String,
    year1:String,
    year2:String,
    year3:String,
    year4:String,
    roll1:String,
    roll2:String,
    roll3:String,
    roll4:String,
    fullmark1:Number,
    fullmark2:Number,
    fullmark3:Number,
    fullmark4:Number,
    obtain1:Number,
    obtain2:Number,
    obtain3:Number,
    obtain4:Number,
    radio:String

}, {
    versionKey: false,
    timestamps: true
})





const StudentModel=mongoose.model("student",StudentAdmission)

module.exports={
    StudentModel
}