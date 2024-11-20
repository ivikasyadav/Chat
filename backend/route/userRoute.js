const express=require("express")
const { protectedRoute } = require("../middleware/protectedRoute")
const { getuserforsidebar,hi } = require("../controller/userController")
// const { getuserforsidebar } = require("../controller/userController")
const router=express.Router()

router.get("/",protectedRoute,getuserforsidebar)
// router.get("/u",hi)


module.exports=router