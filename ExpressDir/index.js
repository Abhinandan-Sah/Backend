const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`App in listening on the port ${port}`);
}); 

// app.use((req, res) => {
//     console.log("request received");
// });

// app.use((req, res) => {
//     console.log("request received");
//     res.send({
//         name: "apple", 
//         color: "red", 
//     });
// });
// app.use((req, res) => {
//     console.log("request received");
//     let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Orange</li></ul>";
//     res.send(code);
// });

app.get("/", (req, res) =>{
    res.send("hello, I am root path");
});
// app.post("/", (req, res) =>{
//     res.send("You send a Post request to root");
// });
// app.get("/apple", (req, res) =>{
//     res.send("You contacted apple path");
// });


//if user select the path which doesn't exit then we use *
// app.get("*", (req, res) => {
//     res.send("Path doesn't exists");
// });

app.get("/:username/:id", (req, res) =>{
    // console.log(req.params);
    // res.send("hello, u have selected username")
    // how Instagram search give result
    let { username, id } = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}!</h1>`;
    res.send(htmlStr);
});

app.get("/search", (req, res) =>{
    let {q} = req.query;
    if(!q){
        res.send("<h1> Request unsucessful</h1>");
    }
    res.send(`<h1> You search for ${q}!.</h1>`);
})