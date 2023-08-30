console.log(`hello`);

//declaring variables
let x = 3;
let y = x + 2;
let z = x ** 2;

let first_name = "joe";
let last_name = "ad\"oo";
let length = first_name.length;

console.log(first_name + " " + last_name);

//functions
function multiply(a, b) {
	let run = 8; // local variable
    return a * b
}
let k = multiply(2, 4);
console.log(k);

//objects
const car = {
type : "toyota", 
color : "black",
specs : function() {
	return this.color + " " + this.type;
}
};

//literals
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;

//arrays
const cars = ["honda", "toyota", "benz"];
cars[0] = "ferrari";

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

//dates
const d = new Date(); //current date and time
const d = new Date(2018, 11, 24, 10, 33, 30, 0); //specified date and time
//months start with 0 to 11

//boolean and comparisons
let x = false;
x == 6; //equal to
x != 6; //not equal to

if (age < 18) text = "Too young to buy alcohol";

//if, else and else if
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

//switch
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}

/*loops*/
//for loops
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

for (let i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}

//while loops
while (i < 10) {
  text += "The number is " + i;
  i++;
}

do {
  text += "The number is " + i;
  i++;
}
while (i < 10);

//break and continue
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
} //break ends the loop at 3

for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
} //continue skips the 3rd iteration

//sets
const letters = new Set(["a","b","c"]);

//arrow
hello = function() {
  return "Hello World!";
} //before arrow

hello = () => {
  return "Hello World!";
} //with arrow