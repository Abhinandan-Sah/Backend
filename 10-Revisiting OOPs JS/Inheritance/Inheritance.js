class mamal{
    constructor(name, type){
        this.name = name;
        this.type = "Warm-Blooded";
    }

    eat() {
        console.log("I am eating");
    }
};

class dog extends mamal{
    constructor(name){
        super(name);
    }

    bark(){
        console.log("woff...");
    }
    eat(){
        console.log("dog is eating")
    }
};
class cat extends mamal{
    constructor(name){
        super(name);
    }

    meow(){
        console.log("meow...");
    }
    
};

let dog1 = new dog("blacky");
let cat1 = new cat("mumu");