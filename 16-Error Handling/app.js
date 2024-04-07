const express = require("express");
const app = express();

app.get("/err", (req, res) => {
    abcd= abcd;
})

//error handling in middleware
app.use((err, req, res, next)=>{
    console.log("------Error-------");
    next(err);
})

app.listen(8080, ()=>{
    console.log("Server is listening to port 8080");
});