const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id : "1a",
        username : "AbhinandanSah",
        content : "I believe in Bhagwan"
    },
    {
        id : "2b",
        username : "GauravPathak",
        content : "I love working with data"
    },
    {
        id : "3c",
        username : "Satyam",
        content : "DevOps is my heart" 
    }
];

app.get("/posts", (req, res) =>{
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) =>{
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let {username, content} = body.params;
    posts.push({username, content});
    // res.send("Your post have been receive successfully");
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    // console.log(post);
    // res.send("Request is working");
    res.render("show.ejs", {post});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});