

const express=require(`express`)
const { connection } = require("./config/db")
require("dotenv").config()
const app=express()


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
