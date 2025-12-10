// Day 3 Practice Code  
// Methods + Inheritance Example

// 1. Methods
class Mobile {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }

    details() {
        console.log(`Brand: ${this.brand}, Price: ${this.price}`);
    }
}

let result = new Mobile("Samsung", 23000);
result.details();


// 2. Inheritance
class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

let d1 = new Dog();
d1.eat();
d1.bark();