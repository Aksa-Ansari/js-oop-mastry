// Day 08 - Static Methods in JavaScript
class Calculator {

    // static method
    static add(a, b) {
        return a + b;
    }

    // static method
    static multiply(a, b) {
        return a * b;
    }
}

// calling static methods using class name
console.log("Addition:", Calculator.add(5, 3));
console.log("Multiplication:", Calculator.multiply(4, 6));

// object is NOT needed for static methods
// let calc = new Calculator();
// calc.add(5,3); // ❌ error
