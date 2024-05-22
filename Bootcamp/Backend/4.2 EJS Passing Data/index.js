import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let data = {title:"Enter your name below"};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {  
  res.render("index.ejs", data);
});

app.post("/submit", (req, res) => {
 const numLetters = req.body["fName"].length + req.body["lName"].length;
 //console.log(numLetters);
  res.render("index.ejs", {numOfLetters: numLetters});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
