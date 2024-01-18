const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/register", (req, res) => {
    // console.log("Standard GET Request");
    let {user, password} = req.query;
    res.send(`Standard GET Response. Welcome ${user}!`);
});

app.post("/register", (req, res) => {
    // console.log("Standard POST Request");
    let {user, password} = req.body;
    res.send(`Standard POST Response. Welcome ${user}!`);
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});