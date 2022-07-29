var express=require('express');
var app=express();
app.get("/",(req,res)=>{
 res.send(
     "<h1>Vijay Sales</h1>"
     +"<hr/>"
     +"<h3>Smart Devices for sale</h3>"
     +"<br/>"
     +"<ol>"
     +"<li>Laptop</li>"
     +"<li>Mobile</li>"
 );
});

var server=app.listen(9000);
console.log("Vijay Sales Online Shopping Running on 9000")