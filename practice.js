var number = 5; // in-line comment

/* this is
n\
nk
multi line comment */

/* Data types
undefined, string, null, boolean, number, object, symbol, 
*/

var myName ="aziz(string)"

myName = 8

//

var a; //declaration
var b = 2; //declaration and assignment. 2 is assigned to b
console.log(a); // will return null

a = 7; //assinging earlier declaration

b = a;

console.log(a); //will return 7

//

//initialize these 3 variables 

var a = 5;
var b = 10;
var c = "i am a";

// dont change code below this line

a = a + 1;
b = b +5;
c = c + "String";

//

var sum = 10 +10;
console.log(sum); //will return 20

var difference = 45 - 20;
console.log(difference); // 25

var quotient = 66/0;
console.log(quotient); // 0

var product = 10 * 20;
console.log(product); // 200

var myVar = 87;
myVar = myVar +1; //increments by 1
myVar ++; //increments by 1
console.log(myVar); //88

myVar = myVar -1; //decrement by 1
myVar --; //decrement by 1

var ourDecimal = 5.7; //decimal
var myDecimal = 0.009 // decimal

var product = 2.0 * 2.5;
console.log(product); //5.0

var quotient = 4.4 / 2.0;
console.log(quotient);// 2.2

var remainder; // remainer of division of 2 numbers
remainder = 11 % 3;
console.log(remainder); // 2

var a = 3;
var b = 17;
var c = 12;

a = a + 12; //15
a += 12; //15

b = 9 + b; //26
b += 9; //26

c = c + 7; //19
c += 7; //19

a -= 2; //1
b -= 10; // 7
c -= 3; 9 

a *= 2; //6
b *= 2; //34
c *= 2; //24

var firstName = "aziz";
var lastName = "ahmed";

var myString = "i am a \"double quouted\" string inside \"double quotes\"";
var myString = 'i am a "double quoted" string inside "double quotes""';
console.log(myString); // "i am a "double quoted" string inside "double quotes"""

/* diff ways of using back slash

\' single quote
\' double quote
\\ backslash
\n newline
\r carriage return
\t tab
\ backspace
\f form feed
*****/

// concatenating strings with + operators and += operators

var ourStr = "I come first. " + "I come second. ";

var myStr = "This is the start. " + "This is the end. "

var ourStr = "I come first. ";
ourStr += "I come second."; 

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// constructing strings with variables

var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName +  ", how are you?";

var myName = "aziz";
var myStr = "My name is " + myName + " and i am well!";

//appending variables to strings

var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

var someAdjective = "worthwhile"
var myStr = "Learning to code is ";
myStr += someAdjective;

//Find length of String 

var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.Length;

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName;

// bracket notation to find first character in string

var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

var firstLetterOfLastName = "";
var lastName = "loveLace";

firstLetterOfLastName = lastName[0];

//  String immutability 

var myStr = "Jello World";

myStr = "Hello World";// Strings are immutable you cant change a single character, you will have to change the entire string


// Bracket notation to find Nth character in string

var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

var lastName = "Lovelace";

var thirdLetterOfLastName = lastName[2];


// bracket notation to find last character in string

var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length-1]; 

var lastName = "Lovelace";

var lastLetterOfLastName = lastName[lastName.length -1];

// bracket notation to find Nth-to-last character in string

var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length-3];


// word blanks challenge

function wordBlanks(myNoun, myAdjective, myVerb,  myAdverb) {
    // code below this line
    var result = ""; 
    result += "The " + myAdjective + "" + myNoun + "" + myVerb + " to the store " + myAdverb
    // code above
     return result;
}
        // change the words to test function
console.log(wordBlanks("dog", "big", "ran", "quickly")); // "The big dog ran to the store quickly"
console.log(wordBlanks("bike", "slow", "flew", "slowly")); //The slow bike fllew to the store slowly


// Store multiple vailues with Arrays

var ourArray = ["john", 23,];

var myArray = ["quincy", 1];


// nested arrays---- when  one of the elements in an array is another array

var ourArray = [["the universe", 42], ["everything", 101010]];

var myArray = [["bulls", 23], ["white sox", 32]];

// access array data with indexes

var ourArray = [50,60,70];
var ourData = ourArray[0];

var myArray = [50,89.90];

var myData = myArray[2];


// modify array with data index

var ourArray = [20,44,78];
ourArray[1] = 45; // our array now equals 20, 25, 78

var myArray = [12,89,77];

myArray[2] = 23; // myarray is now 12,89, 23


// access nested arrays/multi-dimesnional arrays with indexes

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[0][0]; // myData is 1


// manipulate arrays with push ()

var ourArray = ["stimpson", "j", "cat"];
ourArray.push(["happy", "joy"]);
    // now equals ["stimpson, "j", "cat, ["happy", "joy"]]

var myArray = [["aziz", 29], ["cat", 2]];
myArray.push(["dog", 3]);


//manipulate Arrays with pop()

var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop() ;
    //removedFromOurArray now equals 3, and ourArray equals [1,2]

var myArray = [["aziz", 26], ["cat", 2]];
var removedFromMyArray = myArray.pop();
    //myArray = ["aziz", 26] and removedFRomMyArray = ["cat, 2"]


//Manipulate arrays with shift()

var ourArray = ["simsponn", "j", ["cat"]];
var removedFromOurArray = ourArray.shift();
    //removedfromourarray now equals "simpson" and ourArray equals ["j", ["cat"]]

var myArray = [["aziz", 23], ["cat", 3]];
var removedFRomMyArray = myArray.shift();
    //remvedfromMyArray now equals ["aziz", 23]



//manipulate arrays with unshift

var ourArray = ["simpson", "j", "cta"];
ourArray.shift(); //ourArray is now "["j", "cat"]
ourArray.unshift("Happy");
    //ourArray now equals ["happy, "j", "cat"]s


// Shopping List 

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2] ["eggs", 12]]; // array of arrays


// write reusable code with functions

function ourReusableFunction () {
    console.log("Heyya, World"); // anything inside curly brackets is run anytime function is called
}

ourReusableFunction (); 

function reusableFunction () {
    console.log("Hi, world")
}

reusableFunction (); // will return "Hi, world"


//Passing Values to functions with arguments

function ourFunctionWithArgs(a,b) {
    console.log(a-b);
}

ourFunctionWithArgs(10,15); // outputs 5

function functionWithArgs (a, b) {
    console.log(a + b);
}

functionWithArgs(10, 5); // returns 15


// Global scope and functions--- 
    //Scope refers to visbility of variables// variables defined outside of function blocks have GLOBAL scope


var  myGlobal = 10;

function fun1() {
    oopsGlobal = 5; // If you use var keyword in function block its scoped to function, I didnt use var so its Global and used below
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") { // "!=" means does NOT equal
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();



// LOcal scope and functions

function myLocalScope () {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope(); // returns 5

console.log(myVar); // returns an error because myVar isnt accessed outside function 

// Local vs Global scope in functins

var outerWear = "Tshirt";

function myOutfit() {
    return outerWear;
}
console.log(myOutfit()); // will return "Tshirt"

function myOutfit() {
    var outerWear = "sweater";

    return outerWear;
}
console.log(myOutfit()); // will return "sweater" because local scope takes precedence over global scope if the name is identical
console.log(outerWear); //will return "Tshirt"


// Return a value from a function with return

function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10)); // returns 3

function timesFive(num) {
    return num * 5;
}
console.log(timesFive(5)); // returns 25


// Understanding undefined value returned from a function

var sum = 0;
function addThre() {
    sum = sum + 3;
    // if you dont "return" then the return value is undefined
}

function addFive() {
    sum += 5;
}
console.log(addFive); // will return undefined


// Assignment with a Returned Value

var changed = 0;

function change(num) {
    return(num + 5) / 3;
}

changed = change(10);  // the value from the above expression is stored here, which is 5

var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}
 processed = processArg(7); // will return 2




//Stand in Line

function nextInLine(arr, item) {
    arr.push(item);

    return arr.shift;
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr)); // will return [1,2,3,4,5]
console.log(nextInLine(testArr, 6)); // will return 1 
console.log("After: " + JSON.stringify(testArr)); // will return [2,3,4,5,6]


// Boolean Values

function welcomeToBooleans() {
    return false; // basically a sort of on/off switch where true is "on" and false is "off"
}


// Use conditional logic with If statements

function ourTrueOrFalse(isItTrue) { // function takes in variable, will be checked if its true or not
    if(isItTrue) { // if statements are used to make decisions in code, executes code in curly braces under certain conditions defined in parantheses
        return "yes, its true";
    }
    
    return "no, its false";
}

function trueOrFalse(wasThatTrue) {
    if(wasThatTrue) {
        return "Yes, that was wtrue";
    }
    return "no, that was false";
}

console.log(trueOrFalse(true)); // we pass in "true" and log the return


// Comparison with the equality operator

function testEqual(val) {
    if(val ==12) { // double equal/== means equality operator. one equal is Assignment operator
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));


// Comparison with the strict equality operator

function testStrict(val) {
    if(val === 7) {
        return "Equal";
    }
    return "Not equal";
}

/* Strict equality operators dont attempt to convert data types into the same type, regular equality operators DO
3 === 3 is true with both reg and strict equality operators
3 === '3' is NOT true with strict equality since one is a string and theres no type conversion */

testStrict(10); //  return false

function comparativeEquality(a,b) {
    if(a==b) {
        return "equal";
    }
    return "not equal";
}

console.log(comparativeEquality(10,"10")); // return TRUE for double ==. would be FALSE if we used triple =



// Comparison with the inequality operator

function testNotEqual(val) {
    if(val != 99) {
        return "not equal";
    }
    return "equal";
}

console.log(testNotEqual(10)); //  return "not equal"

// compariosn with strict inequality operator

function testStrictNotEqual(val) {

    if(val !== 17) { // checks if not true, but wont convert types of data

        return "not equal";
    }
    return "equal";
}

console.log(testStrictNotEqual(10)); // returns Not Equal


// comparisons with the logical and operator

function testGreaterThan(val) {
    if(val > 100) {
        return "over 100";
    }

    if(val > 10) {
        return "over 10";
    }

    return "10 and under";
}

console.log(greaterThan(10)); // return "10 and under"


// Comparison with Greater Than or Equal to operator 

function testGreaterThanOrEqual(val) {
    if (val >= 20) {
        return "20 or over";
    }
    if (val >= 10) {
        return "10 or over"
    }
    return  "less than 10";
}

console.log(testGreaterThanOrEqual(10)); // will return "10 or over"


// Comparison with the Less Than operator

function testLessThan(val) {
    if (val < 25) {
        return "under 25";
    }
    if (val < 55) {
        return " under 55";
    }
    return "55 or over";
}

console.log(testLessThan(10)); // will return "under 25"



// Comparison with the less than or equal to operator

function testLessThanOrEqual(val) {
    if (val <= 12 ) {
        return " less than or equal to 12";
    }
    if (val <= 24) {
        return " less than or equal to 24";
    }
    return "more than 24"
}

consolelog(testLessThanOrEqual(10)); // returns "less than or equal to 12"




// comparisons with the Logical And Operator

function testLogicalAnd(val) {
    if (val <= 50) {
        if(val>= 25) {
            return "yes"; // logcal and will make nested if statements less necesarry, see below for alternative
        }
    }

    return "No";
}

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "yes";
    }

    return "no";
} // This is the same thing as above, double && stands for "AND"

console.log(testLogicalAnd(10)); // will return no



// Comparisons with the logical "or" operator

function testLogicalOr(val) {
    if (val < 10) {
        return "outside";
    }
    if (val > 20) {
        return "outside";
    }

    return "inside";
}
function testLogicalOr(val) {
    if (val < 10 || val > 20 ) { // This is a truncated version of the previous expression
        return "outside";
    }
}

console.log(testLogicalOr(15)); // will return "inside"



// Else Statements

function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "bigger than 5";
    }
    if (val <= 5) {
        result = "5 or smaller";
    }

    return result;
}

function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "bigger than 5";
    } else {
        result = "5 or smaller"; // when an "if" statement is not true, nothing happens. else allows alternate block of code to be executed when NOT true
    }
}    
    
console.log(testElse(4)); // will return "5 or smaller"



// Else If statements


function testElseIf(val) {
    if (val > 10) {
        return "greater than 10";
    }

    if (val < 5) {
        return "smaller than 5";
    }

    return "between 5 and 10";
}


function testElseIf(val) {
    if (val > 10) {
        return "greater than 10";
    } else if (val < 5) {
        return "smaller than 5";
    } else {
        return "between 5 and 10";
    }
}

console.log(testElseIf(7)); // will return "between 5 n 10"



// Logical ordder in If Else statements

function orderMyLogic(val) {
    if(val < 10) {
        return "less than 10";
    } else if (val < 5) {
        return "less than 5"; // incorrect order, look below to see else if logic
    } else {
        return "greater than or equal to 10";
    }
};

console.log(orderMyLogic(3)); // will return less than 10 


function orderMyLogic(val) {
    if(val < 5) {
        return "less than 5";
    } else if (val < 10) {
        return "less than 10"; // correct order
    } else {
        return "greater than or equal to 10";
    }
}

console.log(orderMyLogic(3)); // will return less than 5. once 1st condition is met, the others arent checked. thats why order is important



// Chaining If Else statements

function testsSize(num) {
    if (num < 5) {
        return "tiny";
    } else if (num < 10) {
        return "small";
    } else if (num < 15) {
        return "Medium";
    } else if ( num < 20) {
        return "large";
    } else {
        return "Huge";
    } // NOTICE ORDER, smallest first because 1st condition to be met is one that matters
}

 console.log(testsSize(7)); // will return "small"



 // Golf Code

 var names = ["hole-in-one", "eagle", "birdies", "par", "bogey", "double bogey", "monk"];
 function golfScore(par, strokes) {
     if (strokes == 1) {
         return names [0];
     } else if (strokes <= par -2) {
         return names[1];
     } else if (strokes == par -2 ) {
         return names[2];
     } else if (strokes == par) {
         return names[3];
     } else if (strokes == par + 1) {
         return names[4];
     } else if (strokes == par + 2 ) {
         return names[5];
     } else if (strokes >= par +3) {
         return names[6];
     }
 };

 console.log(golfScore(5, 2)); //change values to play golf



 // switch statement.....Instead of using chained Else If statements, you can use switch statements. tests values and can have many case values

 function caseInSwitch(val) {
     var answer = "";
     switch(val) {
         case 1:  // IF (val) == 1, then SET answer below
            answer = "alpha";
            break; // ALWAYS use break in case statements, otherwise it might be overrided by the next case
         case 2:
             answer = "beta";
             break;
        case 3: 
             answer = "gamma";
             break;
        case 4: 
             answer = "delta";
     }

     return answer;
 }


      // change this value to test
 console.log(caseInSwitch(1));

 /*
      Write a witch stament which tests val and sets answer for the following conditions:
      1- "alpha"
      2 - "beta"
      3 - "gamma"
      4 - "delta"
*/





// Default Option in switch statements


function switchOfStuff(val) {
    var answer = "";
    switch(val) {
        case "a":  // IF (val) == 1, then SET answer below
           answer = "apple";
           break; // ALWAYS use break in case statements, otherwise it might be overrided by the next case
        case "b":
            answer = "bird";
            break;
        case "b": 
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
        
    }

    return answer;
}

console.log(switchOfStuff(2)) /* this will return an empty string because the original variable as never overrided by the cases
                                when default is set, that will be the value when the other case conditions arent met*/
        




// Multiple identical options in switch statements

function sequentialSizes(val) {  
    var answer = "";
    switch(val) {             // multiple inputs will give same output
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;

    return answer;
    }
}
console.log(sequentialSizes(1)); // will return "low"




// Replacing if else chains wit switch

function chainToSwitch(val) {
    var answer = "";

    if (val === "bob") {
        answer = "Marley";
    } else if (val === 42) {
        answer = "The Answer";
    } else if (val === 1) {
        answer = "There is no #1";
    } else if (val === 99) {
        answer = "missed me by this mych";
    } else if (val === 7) {
        answer = "ate nine";
    }
}

function chainToSwitch(val) {
    var answer = "";

    switch(val) {
        case "bob":     // This is the same as above, but switch staements
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "missed me by this much";
            break;
        case 7:
            answer = "ate nine";
            break;
    }
};




// Returning Boolean Values from functions


function isLess(a,b) {
    if (a<b) {
        return true;
    } else {
        return false;
    }
}

function isLess(a,b) {
    return  a < b;     // this is same as above. Either way, all comparison operators return a boolean true or false. just return result
}


console.log(isLess(10,15));  // true



// REturning Early Pattern from function


function abTest(a, b) {

    if (a < 0 || b < 0) {
        return undefined;  // you can exit a function at any time with return
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));

}

abTest(0,-2); // return undefined




// Counting Cards

var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }


    var holBet = "Hold";
    if (count > 0) {
        holdBet = "Bet"
    }
    return count + "" + holdBet;
}


cc(2); cc('k'); cc(10); cc('K'); cc('A'); 
console.log(cc(4)); /// "Hold"



//Build javascrip objects

var ourDog = {
    "name": "camper", // properties are evrything before colon, values are AFTER colon
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};

var myDog = {
    "name":'chip',
    "legs": 0,
    "tails": 4,
    "friends": [] // empty array. myDog has no friends ;(
}



// accessing objec properies with dot notation

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "jays"
};


var hatValue = testObj.hat; // value is "ballcap"
var shirtValue = testObj.shirt; // value is "jersey"




// accessing object properties with bracket notation

var testObj = {
    "an entreee": "hamburger",  // u can use bracket notation anytime, but REQUIRED when property has spaces in it
    "my side": "veggies",
    "my drink": "coke"
};


var entreeValue = testObj["an entree"]; // value is "hamburger"
var drinkValue = testObj["My drink"]; // value is "coke"




// accessing object properties with variables

var testObj = {
    12: "namath",
    16: "montana",
    19: "unitas"
};

var playerNumber = 16; // "Montana"
var player = testObj[playerNumber];  // "Montana" using bracket notation to access object assigned to variable



// updating object properties

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};

ourDog.name = "Happy Camper" // updated "name" property wih the assignment operator. "camper to hapy camper"


var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": []
};

myDog.name = " happy coder";




// Add new properties to an object
// can add new properties usng dot notation or bracket notation

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};

ourDog.bark = "bow-wow"; // now ourDog has 5 properties not 4


var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": []
};

myDog["anus"] = "star"; // bracket notation




// delete properties from objects

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"],
    "bark": "bow-wow"
};

delete ourDog.bark;

var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["noone"],
    "anus": "star"
};

delete ourDog.anus;




//using objects for lookups

function phoneticLookup(val) {
    var result = "";



    var lookup = {
        "alpha": "adams",
        "bravo": "boston",
        "charlie": "chicago",
        "delta": "detroit",
        "echo": "easy",
        "foxtrot": "frank"
    }; // this  object replaces swictch staement below, and this objec can be used for lookup 

    result = lookup[val];

    return result;

    switch(val) {
        case "alpha":
            result = "adams";
            break;
        case "bravo":
            result = "boston";
            break;
        case "charlie":
            result = "chicago";
            break;
        case "delta":
            result = "detroit";
            break;
        case "echo":
            result = "easy";
            break;
        case "foxtrot":
            result = "frank";
            break;
    }
}

console.log(phoneticLookup("foxtrot")); // result will be "frank"



//Testing objects for properties

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {

   if(myObj.hasOwnProperty(checkProp)) {
       return myObj[checkProp];
   } else {
       return "not found"
   }
}

console.log(checkObj("hello")); // returns "not found"







// Manipulating complex objects

var myMusic = [
    {
        "artist": "deaf grapes",
        "title": "dick",
        "realease_year": 1980,
        "formats": [
            "cd",
            "8t",
            "lp"
        ],
        "gold": true
    },   // This is all an object inside this array. each object holds data in properties hrough key-value pair

    {
        "artist": "monkeyman", // this is the second objec t in the myMusic array
        "title": "head",
        "release_year": 2003,
        "formats": [
            "LP",
            "youtibe",
            "cassette"
        ]

    }
];






//Accessing Nested Objects

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "ouside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // used bracket notation for glove box becuse there is a space!

console.log(gloveBoxContents) // will return maps






// acessing nested arrays


varmyPlants = [
    {
        type : "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "birch",
            "pine"
        ]
    }
];

var secondTree = myPlants[1].list[1];

myconsole.log(secondTree); // will return "birch"




// record collection

// Setup
var recordCollection = {
    2548: { // ID
      albumTitle: 'Slippery When Wet', // Prperty : Value
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  

  // keep a copy of he collection for tests
  var recordCollectionCopy = JSON.parse(JSON.stringify(recordCollection));

  // Only change code below this line
  function updateRecords(records, id, prop, value) {
      if (val === "") { // if value is empty string, will delete whole thing
          delete recordCollection[id][prop];
      } else if ( prop === "tracks") {
          recordCollection[id][prop] = recordCollection[id][prop] || []; // creating property if it doesnt already exist
          recordCollection[id][prop].push(value); // pushing the value that was passed into function into the array
      } else {
          collection[id][prop] = value;
      }
    return recordCollection;
  }
  
  updateRecords(2468, "tracks", "test"); // will add this to corresponding object above
  console.log(updateRecords(5439, 'artist', 'ABBA')); // will add this to object above





  // Iterate with while loops

var myArray = [];

var i = 0;


while( i < 5) {
    myArray.push(i);
    i++
} 

console.log(myArray); // returns [0,1,2,3,4]



//Iterate with for loops

var ourArray = [];

for (var i = 0; i < 5; i++) {
    ourArray.push(i); // fills ourArray with numbers [o,1,2,3,4]
}


var myArray = [];

for (var i = 1; i < 6; i++) {
    myArray.push(i); // will push 1-5 onto myArray
}

console.log(myArray); // will return [1,2,3,4,5]




// Iterate odd numbers witha  for loop

var ourArray = []; // variable is an empty array

for (var i = 0; i < 10; i+= 2) { // incrementing by TWO, pushing all even numbers onto array
    ourArray.push(i);
}

console.log(ourArray); // will return [0,2.4,6,8]

var myArray = [];

for (var i =1; i < 10; i+= 2) {
    myArray.push(i);
}; // "i" is starting at 1, so incrementing by 2 will return odd numbers

console.log(myArray); // [1,3,5,7,9]




// count backwards with a for loop


var ourArray = [];

for (var i = 10; i > 0; i-= 2) { // decrementing by 2 while i is greater than 0
    ourArray.push(i);
};

console.log(ourArray) // [10,8,6,4,2]

var myArray = [];

for (var i =9; i > 0; i-= 2) {
    myArray.push(i);
};

console.log(myArray); // [9,7,5,3,1]



// Iterate through an array with a for loop

var ourArray = [9,10,11,12];
var ourTotal = 0;

for (var i = 0; i < ourArray.length; i++) {
    ourTotal += ourArray[i];
}

console.log(ourTotal); // returns 42 because it adds all the array elements/indexes from ourArray

var myArray  = [2,3,4,5,6];

for (var i = 0; i < myArray.length; i++) {
    total += myArray[i];
}

console.log(myArray); // returns 20



// Nesting For loops

function multiplyAll(arr) { // passing a nested array into his function
    var product = 1;

    for (var i = 0; i < arr.length; i++) { // access outer array
        for (var j=0; j < arr[i].length; j++) { // access inner array, its standard practice to use "i" unless its already been used
            product *= arr[i][j] // i references outer array, j references inner array
        }
    }
    
    return product;
}

var product = multiplyAll([[1,2], [3,4], [5,6,7]]);

console.log(product); // returns 5040



// Iterate with Do....While loops

var myArray = [];
var i = 10;

//// Do while loops always run at least 1 time and then condition, while always checks conditio before running anything

while ( i < 5) {
    myArray.push(i);
    i++;
}//// This wont do naything

do {
    myArray.push(i);
    i++;
} while (i < 5);  // first its going to run the code, then find out conditions are false before breaking out of loop

console.log(i, myArray); // returns 11, [10]









// Profile lookup coding challenge

// Setup
var contacts = [
    {
        "firstName": "Akira",  // name-value or key-value pair
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
    for (var i = 0; i < contacts.length; i++) { // iterating through the objecsts
        if(contacts[i].firstName === name) { // see if name passed in argument maches any property
            return contacts[i][prop] || " no such property" 
        }   
    return "no such context"   
    }
  // Only change code above this line
};

    console.log(lookUpProfile("Akira", "likes")); // will return ["Pizza", "Coding", "Brownie Points"]




// Genertae random fractions

function randomFraction () {


    return Math.random(); 
};

console.log(randomFraction); // will return random fraction between 0 and 1. will not be 1






// generate random whole numbers



// math floor rounds down to nearest whole number. math random = random between 0 and 1, then * 20, then rounded down
var randomNumberBetween0And19 = Math.floor(Math.random() * 20); // random between 0 and 19

function randomWholeNum() {


    return Math.floor(Math.random * 10()); 
}

console.log(randomWholeNum()); // return random  whole # between 0 and 9




// generate random whole numbers within a range

function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin +1)) + ourMin;
}

ourRandomRange(1,9); // every number between 1 and 9

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin +1)) + myMin
}

var myRandom = randomRange(5,15);

console.log(myRandom); // returns random numbers between 5 n 15




// Use the parseInt function


function convertToInterger(str) { // parseInt takes a string and returns an interger
    return parseInt(str); // will return 56 instead of "56"

}

convertToInterger("56");



// use patrseInt function with radix

function convertToInterger(str) { // radix specifies base of number in string
    return parseInt(str, 2) // computer will know its a binary number when you pass in 2
}

convertToInterger("10011");





// use the conditional(ternary operator)

    // its like a one-line if-else expression

function checkEqual(a, b) {
    if(a===b) {
        return true;
    }
    else {
        return false;
    }
};
// condition ? statement-if-true : statement-if-false;
function checkEqual(a, b) {
    return a === b ? true : false;
 // this accomplishes same thing as code block above
    return a === b; // this is he simplest version. this statement will return true or false regardless
};


checkEqual(1,2); // return false




// use multiple conditional/ternary operators

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

consolelog(checkSign(10)); // return "positive"




// differences between var and let keywords

var catName = "aziz";
var quote;

// let wont let you declare variable twice 

var catName = "bay";

function catTalk() {
    "use strict"; // this enables strict mode which catches common coding mistakes and unsafe actions
    // many  coders "use strict" at top of a javascript file, or just in a function
    catName = "oliver";
    quote = catName + "says meow";
}

catTalk();




// comapare scope of let and var keywords


function checkScope() {
    "use strict";
    var i = "function scope"; // if i set let instead of var here
    if (true) {
        i = "block scope"; // and here another let instead of var, i can control scope of i variable 
        console.log("block scope i is: ", i);
    }
        console.log("function scope i is: ", i);
        return i
}

checkScope(); // 





// declare a read only variable with const keyword



function printManyTimes(str) {
    "use strict";

    var sentence = str + " is cool"; // if we change this to const it will return an error. cant reassign a const

    sentence = str + " is amazing"

    for(var i =0; i < str.length; i+=2) { //if there is const above, and we change var to let, console will log "freecode camp is cool"
        console.log(sentence);
    }
}// in most cases use let or const

printManyTimes("freeCodeCamp"); // freecodecamp is amazing with var 






// mutate an array declared with const

const s = [5,7,2];
function editInPlace() {
    "use strict";
    s = [2,5,7];
}

editInPlace();








//Mutate an Array Declared with const

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  
  "use strict";
  
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  // Only change code above this line
}
editInPlace();


//Prevent Object Mutation

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
  
  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();


  //Use Arrow Functions to Write Concise Anonymous Functions

  var magic = function() {
    return new Date();
  };




  //Write Arrow Functions with Parameters

  var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
  };
  
  console.log(myConcat([1, 2], [3, 4, 5]));




  //Set Default Parameters for Your Functions

  // Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line




//Use the Rest Parameter with Function Parameters

const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  };




//Use the Spread Operator to Evaluate Arrays In-Place


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

console.log(arr2);




//Use Destructuring Assignment to Extract Values from Objects

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const today = HIGH_TEMPERATURES.today;
  const tomorrow = HIGH_TEMPERATURES.tomorrow;
  
  // Only change code above this line





//Use Destructuring Assignment to Assign Variables from Nested Objects

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// Only change code above this line




//Use Destructuring Assignment to Assign Variables from Arrays

let a = 8, b = 6;
// Only change code below this line






//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements


const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const arr = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);






//Use Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = (stats) => (stats.max + stats.min) / 2.0; 
// Only change code above this line






//Create Strings using Template Literals


const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);





//Write Concise Object Literal Declarations Using Object Property Shorthand


const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};




//Write Concise Declarative Functions with ES6

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);






//Use class Syntax to Define a Constructor Function

// Only change code below this line

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'






//Use getters and setters to Control Access to an Object

// Only change code below this line

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius







//Create a Module Script


html>
  <body>
    <!-- Only change code below this line -->

    <!-- Only change code above this line -->
  </body>
</html>







//Use export to Share a Code Block


const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}





//Reuse JavaScript Code Using import

  
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");






//Use * to Import Everything from a File


// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");






//Create an Export Fallback with export default

function subtract(x, y) {
  return x - y;
}





//Import a Default Export

  
// Only change code above this line

subtract(7,4);











