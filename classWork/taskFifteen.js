const prompt = require("prompt-sync")();

let userName = prompt("Enter your user name: ");
let password = prompt("Enter you password: ")

if (userName === "admin" && password === "1234") console.log("login success")
else console.log("Invalid credentials")
