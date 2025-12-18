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


class AgeChecker {

    static isEligible(age) {
        if (age >= 18) {
            return "Eligible for voting";
        } else {
            return "Not eligible for voting";
        }
    }
}

// direct class call
console.log(AgeChecker.isEligible(20)); // Eligible for voting
console.log(AgeChecker.isEligible(15)); // Not eligible for voting
