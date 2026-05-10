const prompt = require("prompt-sync")();

let count = 0;
let sum = 0;

for (let index = 1; index <= 3; index++){
    let num = Number(prompt(`Enter number ${index}: `));
    sum += num;
    count++
}

let average = sum / count;

console.log(`The average is ${average}`)
