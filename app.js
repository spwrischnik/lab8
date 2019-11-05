const express = require("express");
var shuffle = require('shuffle-array');
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public")); //access images, css, js


//routes
app.get("/", function(req, res){
    
    //console.log(req.query.q1);
    // let score = 0;
    // let f1, f2, f3, f4, f5;
    // f1 = f2 = f3 = f4 = f5 = "Wrong!";
    
    // if (req.query.q1.toLowerCase() == "sacramento") {
    //     score += 20;
    //     f1 = "You got it!";
    // }
    //res.render("index", {"score": score, "feedback1":f1});
    
    //TODO: shuffle the array
    let q4Choices = ["Maine", "Nevada", "Rhode Island", "Florida"];
    q4Choices = shuffle(q4Choices);
    
    res.render("index", {"q4Choices":q4Choices});
    
} );


app.get("/gradeQuiz", function(req,res){
    
    //console.log(req.query.q1);
    let score = 0;
    let f1, f2, f3, f4, f5, f6, f7, f8;
    f1 = f2 = f3 = f4 = f5 = f6 = f7 = f8 = "Wrong!";
    
    if (req.query.q1.toLowerCase() == "sacramento") {
        score += 12.5;
        f1 = "Right!";
    }
    if (req.query.q2 == "mo") {
        score += 12.5;
        f2 = "Right!";
    }
    if (req.query.q3a=="false" && req.query.q3b=="false"
     && req.query.q3c=="true" && req.query.q3d=="true" ) {
        score += 12.5;
        f3 = "Right!";
    }
    if (req.query.q4 == "Rhode Island") {
        score += 12.5;
        f4 = "Right!";
    }
   if (req.query.q5 == "seal2") {
        score += 12.5;
        f5 = "Right!";
    }    
    if(req.query.q6 == "rock")
    {
        score += 12.5;
        f6 = "Right!";
    }
    if(req.query.q7 == "False")
    {
        score += 12.5;
        f7 = "Right!";
    }
    if(req.query.RI == "false" && req.query.AL == "true" && req.query.TX == "true" && req.query.CA == "true")
    {
        score += 12.5;
        f8 = "Right!";
    }
    res.send({"score": score, "feedback":[{"fback":f1}, {"fback":f2}, {"fback":f3}, {"fback":f4}, {"fback":f5}, 
    {"fback":f6}, {"fback":f7}, {"fback":f8}]});
    
    
});


//running server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
})