/*
  Topic: Classes, Constructor & this keyword
*/

// Person class example
class Person {
  constructor(name, age) {
    this.name = name;   // "this" = current object
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
}

let p1 = new Person("Aksa", 20);
p1.introduce();

let p2 = new Person("Riya", 22);
p2.introduce();


// Car class example
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  details() {
    console.log(`Car: ${this.brand}, Color: ${this.color}`);
  }
}

let c1 = new Car("BMW", "Black");
c1.details();

