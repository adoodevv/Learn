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