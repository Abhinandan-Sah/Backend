const mongoose= require("mongoose");

main()
    .then(()=>{
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min:[1,"Price is too low for selling"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    category:{
        type: String,
        enum : ["friction", "Non-friction"],
    },
    genre: [String],
    
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("65d24c7108e9f8cb1fa57b7d", {price: -100}, {runValidators: true})
.then(
    (res) => {
        console.log(res);
    })
    .catch((err) =>{
        console.log(err.errors.price.properties.message);
    });


// let book1 = new Book({
//     title: "Marvel  Comics V2", 
//     // author: "RD Sharma",
//     price: 1200,
//     category: "friction",
//     genre: ["Fantacy", "Superhero", "Comics"],
// });

// book1.save().then(res => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// }) 
 