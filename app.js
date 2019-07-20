
// Create an Express Frameword object / instantiate
const express = require("express");
const app = express();
app.engine('html',require('ejs').renderFile);

//Creating the root route 

app.use(express.static("public"));


app.get("/", function(req,res){
  res.render("index.html"); 
});

app.get("/mercury", function(req,res){
  res.render("mercury.html"); 
});

app.get("/venus", function(req,res){
  res.send("venus.html"); 
});

app.get("/earth", function(req,res){
  res.render("earth.html"); 
});

app.get("/mars", function(req,res){
  res.send("mars.html"); 
});

// Setting up the server to listen on port 8081
app.listen(process.env.PORT, process.env.IP, function(){  
  console.log("Expresss Server is Running")  
});     
