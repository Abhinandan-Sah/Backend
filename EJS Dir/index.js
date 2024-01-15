const express = require("express");
const app = express();

const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) =>  {
    res.render("home.ejs")
});
app.get("/home", (req, res) =>  {
    res.send("hello")
});
app.get("/roll", (req, res) =>  {
    res.send("rolldice.ejs");
});

app.listen(port, () => {
    console.log(`listening on Port ${port}`);
});