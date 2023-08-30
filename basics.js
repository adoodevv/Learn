console.log(`hello`);

// declaring variables
let x = 3;
let y = x + 2;
let z = x ** 2;

let first_name = "joe";
let last_name = "ad\"oo";
let length = first_name.length;

console.log(first_name + " " + last_name);

// functions
function multiply(a, b) {
	let run = 8; // local variable
    return a * b
}
let k = multiply(2, 4);
console.log(k);

// objects
const car = {
type : "toyota", 
color : "black",
specs : function() {
	return this.color + " " + this.type;
}
};

let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;