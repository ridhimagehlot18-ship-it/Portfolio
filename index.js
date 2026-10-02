const express = require("express");
const app = express();
const mongoose = require("mongoose");

main().then(() => console.log("Connected to MongoDB")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/portfolio');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use(express.urlencoded({extended:true}));

const contactSchema = new mongoose.Schema({
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
})

const Contact = mongoose.model("Contact",contactSchema);
 

app.post("/message",async(req,res)=>{
  
  const message =  new Contact(req.body.Msg);
  await message.save();
  console.log(message);
  console.log("hi");
  res.redirect("http://localhost:5500/index.html");
});



app.listen("8080",()=>{
    console.log("Server started at port: 8080");
});


