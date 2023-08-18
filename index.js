
const multer=require('multer')
const express=require(`express`)
const cors=require('cors')
const { connection } = require("./config/db")
const { ResultRouter } = require("./routes/ResultRoute")
require("dotenv").config()
const jwt = require('jsonwebtoken');
const app=express()
const fs=require('fs')
const bodyParser=require('body-parser')
const { adminModel } = require('./model/AdminModel')
const { StudentRouter } = require('./routes/StudentAdmissionRoute')
const { ImageModel } = require('./model/TestModel')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
app.use("/admission",StudentRouter)
app.use("/result",ResultRouter)
app.get("/",(req,res)=>{
    console.log('welcome to satyam education')
})




// ------Start Demo Code------

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
  
  app.post("/image", upload.single("testimag"), (req, res) => {
    const saveImage =  ImageModel({
      name: req.body.name,
      img: {
        data: fs.readFileSync("uploads/" + req.file.filename),
        contentType: "image/png",
      },
    });
    saveImage
      .save()
      .then((res) => {
        console.log("image is saved");
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });
      res.send('image is saved')
  });
  
  
  app.get('/image',async (req,res)=>{
    const allData = await ImageModel.find()
    res.send("allData")
  })
  

  // --------code end here-------




app.post("/signup",async(req,res)=>{
let data =req.body
console.log(data)

try{ 
    let newAdmin=new adminModel(data)
    await newAdmin.save()
    res.send("Signup Successfull")
}catch(err){
res.send(err)
}

})



app.post("/login",async(req,res)=>{
    let data=req.body 
    try{
       let AllData= await adminModel.findOne({email:data.email,password:data.password})
       if(AllData){
        jwt.sign({ masai: "school" }, AllData.password, function(err, token) {
            console.log(token);
            localStorage.setItem("token",JSON.stringify(token))
          });
       }else{
        console.log("No")
       }
       res.send(AllData)
     }catch(err){
res.send(err)
     }
})

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("db connected successfully")
    }catch(err){
console.log("connection failed")
    }
  console.log(`server running in port ${process.env.port}`)
})
