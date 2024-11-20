const express=require("express")
const {  sendMessage, getMessages, hi } = require("../controller/messageController")
const { protectedRoute } = require("../middleware/protectedRoute")
const router=express.Router()



router.post("/send/:id",protectedRoute,sendMessage)
router.get("/:id",protectedRoute,getMessages)
router.get("/u",hi)

module.exports=router

