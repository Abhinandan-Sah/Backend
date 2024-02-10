const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    database: 'avidb', 
    password: '12345678',
});

let getRandomUser = () =>{
  return [
    faker.datatype.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// let q = "SHOW TABLES"; //this was first query
//*****Inserting New Data(Method1)----------
// let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
// let user = ["123", "123_newuser", "abc@gmail.com", "abc"];
// ---------Inserting multiple row (method2)----------
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let users = [ ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
// ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]
// ];

//use for  insertin in bulks
// let data = [];
// for(let i=1; i<=100; i++){
//   data.push(getRandomUser());  //100 fake users
// }

// try {
//   connection.query(q,[data], (err, result) =>{
//     if (err) throw err;
//     console.log(result);
//     console.log(result.length);
//     console.log(result[0]);
//     console.log(result[1]);
// });
// } catch (err) {
//   console.log(err);
// }



// app.get("/",(req, res)=>{
//     let q = `SELECT count(*) FROM user`;
//     try{
//       connection.query(q,(err, result)=>{
//         if(err) throw err;
//         console.log(result[0]);
//         res.send(result[0]);
//       });
//     }
//     catch(err){
//       console.log(err);
//       res.send("Error has occur");
//     }
// });


// connection.end();

app.get("/", (req, res)=>{
  let q = `SELECT count(*) FROM user;`;
  try{
    connection.query(q, (err, result) =>{
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", {count});
    } );
  }
  catch(err){
    console.log(err);
    res.send("some error in DB");
  }
});

app.get("/user", (req, res) =>{
  let q=  `SELECT * FROM user`;
  try{
    connection.query(q, (err, users)=>{
      if(err) throw err;
      res.render("showuser.ejs", {users});
    });
  }
  catch(err){
    console.log(err);
    res.send("Some error in DB");
  }
});

app.get("/user/:id/edit", (req, res) =>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try{
    connection.query(q, (err, result)=>{
      if(err) throw err;
      console.log(result[0]);
      let user = result[0];
      res.render("edit.ejs", {user});
    });
  }
  catch(err){
    console.log(err);
    res.send("Some error in DB");
  }
  
});

//UPDATE (DB) Route
app.patch("/user/:id", (req, res)=>{
    res.send("Updated");
});

app.listen("8080", ()=>{
  console.log("App is listening of port 8080");
});



// let getRandomUser = () =>{
//     return {
//       Id: faker.string.uuid(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//     };
//   };



  // console.log(getRandomUser());