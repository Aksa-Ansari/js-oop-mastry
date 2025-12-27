// Day 11 - Prototype & Prototypal Inheritance

// Constructor function
function Animal(name) {
    this.name = name;
}

// method added to prototype
Animal.prototype.eat = function () {
    console.log(this.name + " is eating");
};

// creating object
let dog = new Animal("Dog");

// accessing prototype method
dog.eat();


// Prototypal inheritance using Object.create
let parent = {
    greet() {
        console.log("Hello from parent");
    }
};

let child = Object.create(parent);

child.greet(); // inherited from parent
