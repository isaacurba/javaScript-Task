const prompt = require("prompt-sync")();

let number = prompt("Enter number in meter to convert to feet: ");

let feet = number * 3.2786;

console.log(`the number in feet is ${feet}`);
