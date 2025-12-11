// Day 04 - Understanding super keyword

class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); // calling parent constructor
    }

    bark() {
        console.log(`${this.name} is barking`);
    }
}

let d1 = new Dog("Bruno");
d1.sound();
d1.bark();
