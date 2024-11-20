const JWT=require("jsonwebtoken")

const generateToken=(userid,res)=>{
    const token=JWT.sign({userid},process.env.JWT_SECRET,{expiresIn:"7d"})


    res.cookie("JWT",token,{
        httpOnly:true,
        maxAge:7*24*60*60*1000,
        sameSite:"strict",
        
    })

}

module.exports=generateToken