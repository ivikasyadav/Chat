const mongoose=require("mongoose")
const userModel=require("../model/userModel")

exports.getuserforsidebar=async(req,res)=>{
    try{

        const loggedinuser=req.user._id
        const filteruser=await userModel.find({_id:{$ne:loggedinuser}})
        res.status(201).json(filteruser)

    }catch(err){
        console.log(err)
    }
}

