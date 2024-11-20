const JWT=require("jsonwebtoken")
const User = require("../model/userModel")

exports.protectedRoute=async(req,res,next)=>{
    try{
        const token=req.cookies.JWT
        if(!token){
            return res.status(401).json({msg:"Please login to access this route"})
        }
        const decode=JWT.verify(token,process.env.JWT_SECRET)
        if(!decode){
            return res.status(401).json({msg:"Token is invalid"})
        }
        // res.status(500).json({ d:decode        })
        const user=await User.findById(decode.userid).select("-password")
        if(!user){
            return res.status(401).json({msg:"User does not exist"})
        }
        req.user=user
        next()
    }catch(err){
        console.error(err)

    }
}