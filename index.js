

const express=require(`express`)
const cors=require('cors')
const { connection } = require("./config/db")
const { ResultRouter } = require("./routes/ResultRoute")
require("dotenv").config()
const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

app.use("/result",ResultRouter)
app.get("/",(req,res)=>{
    console.log('welcome to satyam education')
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
