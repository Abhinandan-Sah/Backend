const mongoose = require("mongoose");

main()
.then(()=> {
    console.log("Connection Successful");
})
.catch((err) => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    age: Number,
});  

const User = mongoose.model("User", userSchema);

User.deleteOne( {age: 48}, {new: true})
    .then((res) =>{
        console.log(res);
    })
    .catch((err) =>{
        console.log(err);
    });

// User.deleteOne({name: "Bruce"}, {age: 42}, {new: true})
//     .then((res) =>{
//         console.log(res);
//     })
//     .catch((err) =>{
//         console.log(err);
//     });

//This is used to update many data
/*User.updateMany({name : "Bruce"}, {age: 50}, {new: true})
    .then((res) =>{
        console.log(res);
    })
    .catch((err) =>{
        console.error(err);
    });
*/

// User.findById("65cced56a6ff683544232167")
// .then((res) =>{
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// User.find({age: {$gt: 47}})
// .then((res) =>{
//     console.log(res[0].name);
// })
// .catch((err) => {
//     console.log(err);
// });

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 50},
//     {name: "peter", email: "peter@gmail.com", age: 30},
//     {name: "Bruce", email: "bruce@gmail.com", age: 47},
// ]).then((res) => {
//     console.log(res);
// })

/* This are insert as one */
// const user2 = new User({
//     name: "Eve",
//     email: "eve@gamil.com",
//     age: 48,
// });

// user2
//     .save()
//     .then((res) =>{
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
// });

// user1.save();

// mongoose.connect('mongodb://127.0.0.1:27017/test');
