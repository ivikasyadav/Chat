const express=require("express")
const dotenv=require("dotenv")
const cookieparser=require("cookie-parser")
const ConnectDB=require("./config/db")
const authroute = require("./route/authroute");
const messageRoute=require("./route/messageRoute")
const userRoute=require("./route/userRoute")
const cors=require('cors');
const { app, server } = require("./socket/socket");
const { Server } = require("socket.io");
const path = require("path");


app.use(cors())

app.use(express.json())
app.use(cookieparser())
dotenv.config()
ConnectDB()


app.use(express.json())
app.use("/api/auth", authroute);
app.use("/api/message", messageRoute);
app.use("/api/user", userRoute);

app.use(express.static(path.join(__dirname,"../frontend/dist")))
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend/dist/index.html"))
})

PORT= process.env.PORT || 3000
server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})