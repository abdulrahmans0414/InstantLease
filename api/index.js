import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import listingRouter from "./routes/listing.route.js";
import path from 'path';
dotenv.config();

// mongoose connection 
mongoose.connect(process.env.MONGO_URI, {
    dbName: "InstantLease",
})
    .then(() => console.log("mongodb connected"))
    .catch((e) => console.log(e));

// add dynamic path
const __dirname = path.resolve();

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());


app.listen(process.env.PORT, () => {
    console.log(`listening on http://localhost:${process.env.PORT}`);
})

// api routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);


app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

// error handler
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});
