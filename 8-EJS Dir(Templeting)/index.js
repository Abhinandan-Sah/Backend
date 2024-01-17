const express = require("express");
const app = express();

const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) =>  {
    res.render("home.ejs")
});
app.get("/home", (req, res) =>  {
    res.send("hello")
});
app.get("/rolldice", (req, res) =>  {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {diceVal : diceVal});
});

// app.get("/ig/:username", (req, res) => {
//     const followers = ["harry", "Satyam", "Avi", "Gourav"];
//     let {username} = req.params;
//     res.render("instagram.ejs", {username, followers});
// })

app.get("/ig/:animalname", (req, res) => {
    let {animalname} = req.params;
    const instaData = require("./data.json");
    const data = instaData[animalname];
    console.log(data);
    if(data){
        res.render("animal.ejs", {data});
    }
    else{
        res.render("error.ejs");
    }
});

app.listen(port, () => {
    console.log(`listening on Port ${port}`);
});