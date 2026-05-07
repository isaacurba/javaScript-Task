const prompt = require("prompt-sync")();

let point = prompt("Enter your point: ");

let status;
if (point >= 100) status = "Gold";
else status = "Silver";

console.log(status);
