//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");  // Import the ejs module

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");  // Set the view engine to ejs

app.listen(3000, function(){
    console.log("Server has started on port 3000");
});

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var multiplication_result = num1*num2;
    var sum = num1+num2;
    var division = num1/num2;

    // Render the response HTML file with dynamic content using ejs
    res.render("response", {
        multiplication_result: multiplication_result,
        sum: sum,
        division: division
    });
});
