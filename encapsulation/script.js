// Day 05 - Encapsulation, Getter & Setter

class User {
    // private property
    #password;

    constructor(name, password) {
        this.name = name;
        this.#password = password;
    }

    // getter → read password
    get password() {
        return this.#password;
    }

    // setter → update password
    set password(newPass) {
        this.#password = newPass;
    }
}

let u1 = new User("Aksa", "12345");

// accessing name (public)
console.log("Name:", u1.name);

// accessing password using getter
console.log("Old Password:", u1.password);

// updating password using setter
u1.password = "98765";

// checking updated password
console.log("New Password:", u1.password);

// trying to access private data directly → error
// console.log(u1.#password); // ❌ not allowed
