function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " "+ myVerb + " "  + myAdverb + " to the store";
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"))

//multi-dimensional arrays
var myArray = [[1,2,3], [4,5,6], [7,8,9]];

var myData = myArray[0][1];

console.log(myData);

//functions
function ReusableFunction() {
    console.log("Heyya, World");
}
ReusableFunction();

function FunctionWithArgs(a, b) {
    console.log(a - b);
}
FunctionWithArgs(10, 5);

//return
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));

//conditional statements
function TrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log(TrueOrFalse(true));

//comparison with equal
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10));

// != not equal to
// && and operator
// || or operator

//Else statements
function testElse(val) {
    if (val == 12) {
        return "Equal";
    } else {
        return "Not Equal";
    }
}
console.log(testElse(12));

//Else If statements
function testElseIf(val) {
    if (val < 10) {
        return "Less than 10";
    } else if (val < 5) {
        return "Less than 5";
    } else {
        return "Greater than or equal to 10";
    }
}
console.log(testElseIf(3));

//Logical order Else If statements
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
console.log(orderMyLogic(3));

//Golf code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go home"];
function golfScore(par, strokes) {
    if (strokes == 5) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    } 
}

console.log(golfScore(5, 8));

//Switch statements
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    } 
    return answer
} 

console.log(caseInSwitch(2))

//returning boolean from function
function isLess(a, b) {
    return a < b;
} 

console.log(isLess(10, 15));

//counting cards
var count = 0;
function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count ++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count --;
            break;
    }
    var holdBet = "Hold";
    if (count > 0) {
        holdBet = "Bet";
    } 
    return count + " " + holdBet;
}

cc(2); cc("K"); cc(10); cc("K"); cc("A");
console.log(cc(4));

//Objects
//properties : values
//properties can be any data type in JS
var myDog = {
    "name": "Peg",
    "legs": 3,
    "tails": 2,
    "friends": ["Joe", "Mills"]
};

//Accessing object properties with dot notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats",
};

var hatValue = testObj.hat;
console.log(hatValue);

//Accessing object properties with bracket notation
//required if the name has a space in it
var testObjt = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water",
};

var entreeValue = testObjt["an entree"];
console.log(entreeValue);

//Complex objects
var myMusic = [
    {
        "artist": "Black Sheriff",
        "title": "The Homeless Song",
        "release year": 2022,
        "formats": [
            "Youtube Video",
            "Spotify"
        ]
    },
    {
        "artist": "Burna Boy",
        "title": "Last Last",
        "release year": 2022,
        "formats": [
            "Youtube Video",
            "Spotify"
        ]
    }
];

//Accessing nested objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs",
        },
        "outside": {
            "trunk": "shoe",
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

//Accessing nested arrays
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "mango",
            "fig",
            "wawa"
        ]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);

//challenge: Record collection
var collection = {
    "2548": {
        "album": "The Villain I Never Was",
        "artist": "Black Sheriff",
        "tracks": [
            "Toxic Love City",
            "Wasteman",
            "45"
        ] 
    },
    "2468": {
        "album": "Love, Damini",
        "artist": "Burna Boy",
        "tracks": [
            "Last Last",
            "Vanilla",
            "Science"
        ] 
    }
};
//Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

//funtion for task
function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}
//test
console.log(updateRecords(2468, "artist", "Jonathan"));

//loops allows you to run a piece of code multiple times
//While loops
var myArray = [];

var i = 0;

while (i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);

//For loops
// most common type of loop in JS
var ourArray = [];
//for (initialization; condition; expression)
for (var i = 0; i < 5; i++){ 
    ourArray.push(i);
}

console.log(ourArray);

//iterate even numbers with For loops
var myArray = [];

for (var i = 2; i < 10; i += 2){ 
    myArray.push(i);
}

console.log(myArray);

//iterate odd numbers with For loops
var myArray = [];

for (var i = 1; i < 10; i += 2){ 
    myArray.push(i);
}

console.log(myArray);

//iterate through an array with For loops
var myArr = [9, 10, 11, 12];
var myTotal = 0;

for (var i = 0; i < myArr.length; i++) {
    myTotal += myArr[i];
}

console.log(myTotal);

//nesting For loops
function multipyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

var multiply = multipyAll([[1,2], [3,4], [5,6,7]]);
console.log(multiply);

//Do while loops
//while loops first checks the condition before it runs any code withing the loop
//do while loop will always run at least one time then it checks the condition
var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray);

//challenge: Profile lookup
var contacts = [
    {
        "firstName": "Christabel",
        "lastName": "Quansah",
        "number": "0011223377",
        "likes": ["Pizza", "Sobolo"]
    },
    {
        "firstName": "Haqq",
        "lastName": "Munagah",
        "number": "9911223377",
        "likes": ["Coding", "Sobolo", "Football"]
    },
    {
        "firstName": "Melike",
        "lastName": "Arkutu",
        "number": "unknown",
        "likes": ["Coding", "Music"]
    }
]

//function takes a name and property and returns the value of the property
function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact"
}

var data = lookUpProfile("Haqq", "likes")
console.log(data);

//generate random fractions
function randomFraction() {
    return Math.random();
}

console.log(randomFraction());

//generate random whole numbers
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());

//generate random whole numbers within a range
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(5, 15));

// parseInt function
// takes a string and gives an integer
function convertToInteger(str) {
    return parseInt(str);
}

// parseInt function with a radix
// radix specifies the base of the number such as base 2 or base 5
function convertToIntegers(str) {
    return parseInt(str, 2);
}

// conditional(ternary) operator
// just like a one-line if else expression
// condition ? statement-if-true : statement-if-false;

function checkEqual(a, b) {
    return a === b ? true : false;
}

// multiple ternary operators
function checkSign(num) {
    return num > 0 ? "positive": num < 0 ? "negative" : "zero";
}

console.log(checkSign(-5));

// let variable declaration doesn't allow a variable to be declared twice
let catName = "Peg";
catName = "Afri";

//const variable is read-only
const RATE = 4.5;

// mutating an array declared with const
const s = [5, 7, 2];

function editInPlace() {
    s[0] = 2;
    s[2] = 4;
    return s
}

console.log(editInPlace());

// arrow functions
const magic = () => new Date();

// arrow functions with parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// rest operator
// allows to create a function that creates a variable number of parameters
const sum = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();

console.log(sum(1, 2, 8, 4));