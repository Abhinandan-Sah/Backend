const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// app.use((req, res, next)=>{
//     console.log("Hi I am 1st middleware");
//     console.log("accepting request");
//     return next();
//     throw new Error("ACCESS DENIED!");
// });

// app.use((req, res, next)=>{
//     console.log("Hi I am 2nd middleware");
//     next();
// });

//logger - morgon(utility middleware)
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path);
//     next();
// })



//for creating middleware for specific route
// app.use("/random", (req, res, next) =>{
//     console.log("I am only for random");
//     next();
// })

//creating middleware for api route
// app.use("/api", (req, res, next)=>{
//     let {token} = req.query;
//     if(token=="giveaccess"){  //you can access this /api path by http://localhost:8080/api?token=giveaccess
//         next();
//     }
//     res.send("ACCESS DENIED!");
// })

//creating multiple middleware using variable
const checkToken = (req, res, next)=>{
    let {token} = req.query;
    if(token=="giveaccess"){  //you can access this /api path by http://localhost:8080/api?token=giveaccess
        next();
    }else {
        // res.status(401).send("ACCESS DENIED!");
        throw new ExpressError(401,"ACCESS DENIED!");
    }
};

app.get("/api",checkToken, (req, res) =>{
    res.send("Data")
})

app.get("/", (req, res)=>{
    res.send("Hi, I am root.");
})

app.get("/random", (req, res)=>{
    res.send("This is a random page");
});
app.get("/err", (req, res)=>{
    abcd=abcd;
});
app.get("/admin", (req, res)=>{
    throw new ExpressError(403, "Access to Admin is forbidded")
});

//404 if there is not any page which the user have search
app.use((req, res) =>{
    res.status(404).send("Page not found!");
});

app.use((err, req, res, next)=>{
    let {status=500, message="Some error occured"} = err;
    res.status(status).send(message);
})

app.listen(8080, ()=>{
    console.log("Server is listening to port 8080");
});


