const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    mail:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    }
});

let person = mongoose.model("person",userSchema);

 person = module.exports;