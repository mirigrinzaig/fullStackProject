require("dotenv").config()

const mongoose = require("mongoose")

const express = require("express")
const cors= require("cors")
const cookieParser=require('cookie-parser')

const corsOptions = require("./config/corsOptions")
const connectDB=require("./config/dbConn")

const PORT = process.env.PORT || 7001
const app = express()

connectDB()
//middlewares
app.use(express.static("public"))
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

//routes
app.use("/api/users",require("./routes/usersRoutes"))
app.use("/api/auth",require("./routes/authRoutes"))
app.use("/api/products",require("./routes/productsRoutes"))
app.get("/",(req,res)=>{
res.send("this is the home page")
})

mongoose.connection.once("open",()=>{
    console.log("Connected to mongoDB")
    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`) })
})

mongoose.connection.on('error',err=>{
    console.log("connection to db error");
    console.log(err);
})

