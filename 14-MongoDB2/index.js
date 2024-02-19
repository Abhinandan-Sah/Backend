const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) =>{
        console.log(err);
    })

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let chat1 = new Chat({
    from: "neha",
    to: "priya",
    msg: "Send me your exam sheets",
    created_at: new Date(),
});

chat1.save().then((res) => {
    console.log(res);
})

app.get("/", (req, res) =>{
    res.send("Connection Established");
})

app.listen(8080, () =>{
    console.log("server is listening on port 8080");
})