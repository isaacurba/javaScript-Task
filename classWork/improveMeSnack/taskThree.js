const prompt = require("prompt-sync")();

let userName = prompt("Enter your user name: ");
let password = prompt("Enter your password: ");

function credentials(userName, password){
    if (userName == "grace" && password == 12345){
        console.log("Login successful");
    }else{
        console.log("Login failed");
    }
}

credentials(userName, password);
