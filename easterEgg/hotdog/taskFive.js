const prompt = require("prompt-sync")();

let number = prompt("Enter number in square meter to convert to ping: ");

let ping = number * 0.3035;

console.log(`the number in ping is ${ping}`);
