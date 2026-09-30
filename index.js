const express = require("express");
const app = express();
const mongoose = require("mongoose");
const MONGO = "mongodb://127.0.0.1:27017/portfolio";
const person = require("./models/data.js");
main()
.then(console.log("connected to db"))
.catch((e)=>{console.log(e)});

async function main() {
    await mongoose.connect(MONGO);
}

app.get("/",(req,res)=>{
res.send("working");
});

app.listen("8080",()=>{
    console.log("Server started at port: 8080");
});

