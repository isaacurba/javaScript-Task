const prompt = require("prompt-sync")();

let number = Number(prompt("Enter number to check if even or odd: "));

if (number % 2 == 0) console.log(`${number} is even`);
else console.log(`{number} is odd`);



