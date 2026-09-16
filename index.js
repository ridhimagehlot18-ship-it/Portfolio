const express = require("express");
const app = express();
const mysql = require("mysql2");
app.use(express.urlencoded({extended:true}));



app.listen("8080",()=>{
    console.log("Server started at port: 8080");
});

const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'portfolio',
  password:'itz_ridhima18'
});


app.get("/user",(req,res)=>{
    res.send("User msg send");
})