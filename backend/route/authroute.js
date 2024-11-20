const express=require("express")
const { singup, login, logout } = require("../controller/authController")
const router=express.Router()

router.post("/singup",singup)

router.post("/login",login)

router.post("/logout",logout)

module.exports=router