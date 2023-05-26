const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
const { json } = require("express")

require("dotenv").config()
app.use(express.json())
app.use(cors())

const drimoSchema=mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }, 
    price:{
        type:Number,
        required:true
    }
})

const Drimo=mongoose.model("Drimo", drimoSchema)

app.post("/drimo", async (req,res)=>{
    const newDrimo=new Drimo({
        ...req.body
    })
    await newDrimo.save()
    res.send(newDrimo)
})

app.get("/drimo", async(req,res)=>{
    const data=await Drimo.find()
    res.send(data)
})

app.get("/drimo/:id", async (req,res)=>{
    const {id}=req.params
    const target=await Drimo.findById(id)
    res.send(target)
})

app.delete("/drimo/:id" ,async(req,res)=>{
    const {id}=req.params
    await Drimo.findByIdAndDelete(id)
    res.send("PRODUCT HAS BEEN DELETED")
})

mongoose.connect(process.env.DB_CONNECT). then(res=>{
    console.log("DB CONNECTED")
})

app.listen(process.env.PORT, ()=>{
    console.log("app running")
})