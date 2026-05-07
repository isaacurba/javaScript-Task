const object = {
    name: "segun",
    hobby: "football",
    age: 6
}


// FOR IN LOOP
for (let index in object){
    console.log(object[index])
}

console.log()


// USION OBJECTS TO CHECK EACH INDEX
let item = Object.entries(object);
console.log(item)


let value = Object.values(object);
console.log(value)

let keys = Object.keys(object);
console.log(keys)


// NORMAL FOR LOOP IN JAAVASCRIPT

for (let index = 0; index <= 10; index++){
    console.log(index);
}

console.log()

// WHILE LOOP IN JAVASCRIPT

let counter = 0;

while (counter <= 10){

    console.log(counter);
    counter++

}

console.log()
console.log()
console.log()

let cunt = 0;
do {
    cunt+=2;
    console.log(cunt)
}while(cunt <= 10)
