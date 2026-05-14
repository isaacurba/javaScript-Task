const prompt = require("prompt-sync")();

let lightColor = prompt("Enter traffic light color: ");

if (lightColor.toLowerCase() == "red") console.log("Stop");
else if (lightColor.toLowerCase() == "yellow") console.log("Ready");
else if (lightColor.toLowerCase() == "green") console.log("Go");
else console.log("Invalid input");
