const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');



const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    database: 'avidb', 
    password: '12345678',
});


// let q = "SHOW TABLES"; //this was first query
//*****Inserting New Data(Method1)----------
// let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
// let user = ["123", "123_newuser", "abc@gmail.com", "abc"];
// ---------Inserting multiple row (method2)----------
let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let users = [ ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
["123c", "123_newuserc", "abc@gmail.comc", "abcc"]
];

try {
  connection.query(q,[users], (err, result) =>{
    if (err) throw err;
    console.log(result);
    console.log(result.length);
    console.log(result[0]);
    console.log(result[1]);
});
} catch (err) {
  console.log(err);
}

connection.end();

let getRandomUser = () =>{
    return {
      Id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  };

  // console.log(getRandomUser());