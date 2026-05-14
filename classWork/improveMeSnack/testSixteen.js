const prompt = require("prompt-sync")();

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
function sum(num1, num2){
    return num1 + num2;
}


console.log(sum(num1, num2));
