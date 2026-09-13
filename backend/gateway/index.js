import express from "express"
import dotenv from "dotenv"
dotenv.config()

const port=process.env.port

const app=express()
app.get("/",(req,res)=>{
    res.json({"message":"from gate way"})
})
app.listen(port,()=>{
    console.log("Gateway started at 8000");
    
})

