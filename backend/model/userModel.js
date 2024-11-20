const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        // minlength: 6
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"] // This restricts gender to these two values
    },
    profpic: {
        type: String,
        default: ""
    }
},{timestamps:true});

const User = mongoose.model("User", userSchema);
module.exports = User;