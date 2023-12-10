function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " "+ myVerb + " "  + myAdverb + " to the store";
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"))

//multi-dimensional arrays
var myArray = [[1,2,3], [4,5,6], [7,8,9]];

var myData = myArray[2][1];

console.log(myData);