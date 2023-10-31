import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

// mongoose connection 
mongoose.connect(process.env.MONGO_URI,{
    dbName: "InstantLease",
})
.then(()=>console.log("mongodb connected"))
.catch((e)=>console.log(e));


const app = express();
app.use(express.json());


app.listen(process.env.PORT,()=>{
    console.log(`listening on http://localhost:${process.env.PORT}`);
})

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);