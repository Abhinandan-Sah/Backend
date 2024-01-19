function PersonMaker(name, age){
    const person = {
        name: name, 
        age: age, 
        talk(){
            console.log(`Hi, my name is ${this.name}`);
        }
    }
}

let p1 = PersonMaker("adam", 25);
let p2 = PersonMaker("eve", 25);