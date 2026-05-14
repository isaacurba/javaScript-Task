const prompt = require("prompt-sync")();

let weekDay = prompt("Day: ");

switch(weekDay.toLowerCase()){
    case "monday" :
    case "tuesday" :
    case "wednesday" :
    case "thursday" :
    case "friday" : 
    console.log("Its week Day") 
    break;
    case "saturday" : 
    case "sunday" : 
    console.log("Its week end") 
    break;
    default: console.log("invalid login");
}    
