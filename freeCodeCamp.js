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