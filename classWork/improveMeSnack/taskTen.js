const prompt = require("prompt-sync")();

let score = prompt("Enter score: ")

if (score > 70) console.log("A");
else if (score >= 60 && score <= 69) console.log("B");
else if (score >= 50 && score<= 59) console.log("C");
else if (score >= 40 && score<= 49) console.log("D");
else console.log("F")
