const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
uuidv4();  // => '1b9dbcd-bbdf-4b2sd-9b5d-ab8fin3ns8d'

const methodOverride =require("method-override");

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id : uuidv4(),
        username : "Abhinandan",
        content : "Eat, Code & Sleep"
    },
    {
        id : uuidv4(),
        username : "Yuvraj",
        content : "I love working with data"
    },
    {
        id : uuidv4(),
        username : "Twitter",
        content : "I show recent tweets." 
    }
];

app.get("/posts", (req, res) =>{
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) =>{
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id =uuidv4();
    posts.push({id, username, content});
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

app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    // console.log(id);
    let newContent = req.body.content;
    // console.log(newContent);
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    // res.send("Patch request working");
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
    res.redirect("/posts")
});

app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});