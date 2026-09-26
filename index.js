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


app.get("/",(req,res)=>{
    console.log("welcome");
})

app.get("/user",(req,res)=>{
    
   let {user,mail,text} = req.params;
   console.log(user.value);
   console.log(mail);
   console.log(text);
   res.send("recieved");
})
