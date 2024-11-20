const bcrypt = require('bcryptjs');
const User = require('../model/userModel'); // Adjust path as needed
const generateToken = require("../utils/generatetoken")

exports.singup= async (req, res) => {
    try {

        const { name, username, password, confirmpassword, gender } = req.body;
        if (!name || !username || !password || !confirmpassword || !gender) {
            return res.status(400).json({ msg: "Please fill in all fields" });
        }
        if (password !== confirmpassword) {
            return res.status(400).json({ msg: "Password and confirm password do not match" })
        }

        const exuser = await User.findOne({ username })
        if (exuser) {
            return res.status(400).json({ msg: "Username already exists" })
        }

        const hash = await bcrypt.hash(password, 10)
        const profpic = gender === "male"
            ? `https://avatar.iran.liara.run/public/boy?username=${username}`
            : `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newuser = new User({ name, username, password: hash, profpic, gender })
        generateToken(newuser._id, res)

        await newuser.save()


        res.status(201).json({
            
            _id: newuser._id,
            fullname: newuser.name,
            username: newuser.username,
            profpic: newuser.profpic,
            gender: newuser.gender

        })

    } catch (err) {
        console.error(err)
        res.status(500).json(err);

    }
}

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const exuser = await User.findOne({ username })
        if (!exuser) {
            return res.status(400).json({ msg: "Invalid username " })
        }

        const ispassword = await bcrypt.compare(password, exuser.password)
        if (!ispassword) {
            return res.status(400).json({ msg: "Invalid password" })
        }
        const token = await generateToken(exuser._id, res)

        return res.status(201).json({
            message:"Login successfully",
            _id:exuser._id,
            username: exuser.username,
            name:exuser.name ,
            profile:exuser.profpic,
            gender:exuser.gender,
            token
            
        })


    } catch (err) {
        console.log(err)
    }
}

exports.logout=async(req,res)=>{
    try{
        res.cookie("JWT","",{maxAge:0})
        res.status(200).json("logged out successfully")

    }catch(err){
        console.log(err)
    }
}