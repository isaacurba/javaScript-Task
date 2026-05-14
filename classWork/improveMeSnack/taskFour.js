function numberAbsoluteChecker(number){
    if (number > 0){
        console.log(`${number} is a positive number`);
    }
    else if (number < 0){
        console.log(`${number} is a negative number`);
    }
    else{   
        console.log("This is zero")
    } 
}


numberAbsoluteChecker(0);
