 // comment
console.log("Hello World");

// variable
let name = 'Joe';
console.log(name);

// constants
const interestRate = 0.3;
console.log(interestRate);

// objects
let zoo = {
    animal: "dog",
    keeper: "haqq"
}

// Dot notation
zoo.animal = "lion";
console.log(zoo.animal);

// Bracket notation
zoo['keeper'] = 'george';
console.log(zoo.keeper);

// arrays
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
selectedColors[2] = 'green';
console.log(selectedColors[1]);

//functions
function greet(firstname) {
    console.log('Hello ' + firstname);
}
greet('peggy');

//function calculating a value
function square(number) {
    return number * number
}