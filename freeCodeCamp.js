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