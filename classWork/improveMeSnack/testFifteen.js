const prompt = require("prompt-sync")();
let age = prompt("Enter age: ");

let access = (age >= 18) ? "Granted" : "Denied";

console.log(access);

