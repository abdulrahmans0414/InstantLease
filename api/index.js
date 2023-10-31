import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// mongoose connection settings
mongoose.connect(process.env.MONGO_URI,{
    dbName: "InstantLease",
})
.then(()=>console.log("mongodb connected"))
.catch((e)=>console.log(e));



const app = express();


app.listen(process.env.PORT,()=>{
    console.log(`listening on http://localhost:${process.env.PORT}`);
})