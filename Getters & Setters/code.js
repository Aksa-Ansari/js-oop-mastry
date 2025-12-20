// Day 9 - Getters and Setters in JavaScript

class BankAccount {
    constructor(balance) {
        this._balance = balance;
    }

    // getter
    get balance() {
        return this._balance;
    }

    // setter
    set balance(amount) {
        if (amount < 0) {
            console.log("Amount cannot be negative");
        } else {
            this._balance = amount;
        }
    }
}

let account = new BankAccount(1000);

// using getter
console.log("Current Balance:", account.balance);

// using setter
account.balance = 2000;
console.log("Updated Balance:", account.balance);

// invalid update
account.balance = -500;
