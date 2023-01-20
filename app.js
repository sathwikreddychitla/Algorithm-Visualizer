require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req,res){
  res.sendFile(__dirname + "/project.html");
})

app.get("/about", function(req, res){
  res.sendFile(__dirname + "/about.html");
})

app.get("/pathfinding", function(req, res){
  res.sendFile(__dirname + "/pathfinding.html");
})

app.get("/visualizer-sorting", function(req, res){
  res.render("visualizer", {
    title: "Sorting Visualizer",
    sub_text: "Choose one to visualize",
    card_title: "Black Board Implementation",
    card_title_: "Practical Implementation",
    link:"Click Here",
    black_board: "/sorting",
    pratical: "/sorting_"
  });
})

app.get("/visualizer-searching", function(req, res){
  res.render("visualizer", {
    title: "Searching Visualizer",
    sub_text: "Choose one to visualize",
    card_title: "Black Board Implementation",
    card_title_: "Practical Implementation",
    link: "Click Here",
    black_board: "/searching",
    pratical: "/searching_"
  });
})

app.get("/sorting", function(req, res){
  res.sendFile(__dirname + "/sorting_.html");
})

app.get("/sorting_", function(req, res){
  res.sendFile(__dirname + "/sorting.html");
})

app.get("/searching", function(req, res){
  res.sendFile(__dirname + "/search.html");
})

app.get("/searching_", function(req, res){
  res.sendFile(__dirname + "/search_.html");
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000");
})
