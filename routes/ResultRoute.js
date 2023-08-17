const mongoose = require('mongoose')
const path=require('path')
const morgan=require('morgan')
const express = require('express')
const multer  = require('multer')
const fs=require('fs')
const app=express()
const { ResultModel } = require('../model/ResultModel')
const ResultRouter = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'uploads/');
    },
    filename: (req, file, callback) => {
        callback(null,file.originalname);
      },
    });

    const upload = multer({ storage: storage });




ResultRouter.get("/", async(req, res) => {
    try{
       let allData=await ResultModel.find()
       res.send(allData)
    }catch(err){
        console.log(err)
    }
})

ResultRouter.post("/add",upload.single("testimage"), async (req, res) => {
    // const {image,session,roll_no,student_name,fathers_name,mothers_name
    //     ,date_of_birth,gender,admission_in_class,course_name,
    //     sub1,mark1,sub2,mark2,sub3,mark3,sub4,mark4,sub5,mark5,sub6,mark6,sub7,mark7,sub8,mark8}= req.body
    // const { filename, path } = req.file;
    // console.log(req.file.filename)

    // const images = req.files.map((file) => ({
    //     data:fs.readFileSync('uploads/'+file.filename),
    //      contentType:"image/png"
    //   }));

    


const saveData=ResultModel({
    session:req.body.session,
    roll_no:req.body.roll_no,
    student_name:req.body.student_name,
    fathers_name:req.body.fathers_name,
    mothers_name:req.body.mothers_name,
    date_of_birth:req.body.date_of_birth,
    gender:req.body.gender,
    admission_in_class:req.body.admission_in_class,
    course_name:req.body.course_name,
    sub1:req.body.sub1,mark1:req.body.mark1,
    sub2:req.body.sub2,mark2:req.body.mark2,
    sub3:req.body.sub3,mark3:req.body.mark3,
    sub4:req.body.sub4,mark4:req.body.mark4,
    sub5:req.body.sub5,mark5:req.body.mark5,
    sub6:req.body.sub6,mark6:req.body.mark6,
    sub7:req.body.sub7,mark7:req.body.mark7,
    sub8:req.body.sub8,mark8:req.body.mark8,
    myqr:req.body.myqr,
image:{
    data:fs.readFileSync('uploads/'+req.file.filename),
    contentType:"image/png"
 
},

//     data:fs.readFileSync('uploads/'+req.file.filename),
// contentType:"image/png"


    

})



try {
        
        await saveData.save()
        res.send("Data Saved Successfully")
    } catch (err) {
res.send (err.message)
    }
})

module.exports = {
    ResultRouter
}