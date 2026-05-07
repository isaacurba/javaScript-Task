const prompt = require("prompt-sync")();

let age = prompt("enter your age: ");
let country = prompt("enter your country: ");

const user = {
    age: age,
    country: country
}

if (age >= 18 && country === "nigeria") console.log("Access granted: ");
else console.log("Access denied");
