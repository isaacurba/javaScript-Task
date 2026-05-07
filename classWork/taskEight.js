const prompt = require("prompt-sync")();

let email = prompt("Enter your email: ")

const user = {
    name: "Ada",
    email: email
}

console.log(user)
