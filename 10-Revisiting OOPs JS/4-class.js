class Person{
    constructor(name, age){
        this.name = name; 
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`)
    }
}

let p1 = new Person("avi", 21);
let p2 = new Person("ravi", 20);
