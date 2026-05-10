const prompt = require("prompt-sync")();

let num = Number(prompt("Enter number from 0 to 1000 to print the sum of all the digits: "));

let sum = 0;

while(num > 0){
    let lastDigit = num % 10;
    sum = sum + lastDigit;
    num = num / 10 ;
}

console.log("The sum of all the digit are " + sum);
