const prompt = require("prompt-sync")();

let number = prompt("Enter number in miles to convert to kilometer: ");

let kilometer = number * 1.6;

console.log(`the number in kilometer is ${kilometer}`);
