// Day 06 - Abstraction in JavaScript

class ChatApp {
    startChat() {
        this.#connectServer();
        console.log("Chat started successfully 💬");
    }

    // internal logic (hidden)
    #connectServer() {
        console.log("Connecting to server...");
    }
}

let chat = new ChatApp();

// user only knows how to start chat
chat.startChat();

// user cannot access internal logic
// chat.#connectServer(); not allowed
