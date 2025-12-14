// Day 07 - Polymorphism in JavaScript

class Animal {
    makeSound() {
        console.log("Some generic sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Cat meows");
    }
}

let a1 = new Animal();
let d1 = new Dog();
let c1 = new Cat();

a1.makeSound(); // Some generic sound
d1.makeSound(); // Dog barks
c1.makeSound(); // Cat meows