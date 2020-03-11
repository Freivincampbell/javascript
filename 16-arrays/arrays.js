// JavaScript arrays are used to store multiple values in a single variable.



// Creating an Array
// let array_name = [item1, item2];

let cars = ["Saab", "Volvo", "BMW"];

// Spaces and line breaks are not important. A declaration can span multiple lines:

cars = [
    "Saab",
    "Volvo",
    "BMW"
];

// Using the JavaScript Keyword new

cars = new Array("Saab", "Volvo", "BMW");
cars = Array("Saab", "Volvo", "BMW");

// Access the Elements of an Array

let name = cars[0];

document.getElementById("demo").innerHTML = cars[0];
document.getElementById("demo").innerHTML = name;

// Note: Array indexes start with 0.
// [0] is the first element. [1] is the second element.

// Changing an Array Element
cars[0] = "Opel";

// Access the Full Array
document.getElementById("demo").innerHTML = cars;

// Arrays are Objects
let person = ["John", "Doe", 46];

// Object
person = {firstName:"John", lastName:"Doe", age:46};

// Array Elements Can Be Objects
let myArray = [];

let myFunction = function() { console.log('I am a function'); };

myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = cars;

// Array Properties and Methods

let x = cars.length;   // The length property returns the number of elements
let y = cars.sort();   // The sort() method sorts arrays

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length;   // the length of fruits is 4

// Accessing the First Array Element
let first = fruits[0];

// Accessing the Last Array Element
let last = fruits[fruits.length - 1];


// Looping Array Elements
// The safest way to loop through an array, is using a for loop:

let text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";


// You can also use the Array.forEach() function:

text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
    text += "<li>" + value + "</li>";
}

// Adding Array Elements
// The easiest way to add a new element to an array is using the push() method:

fruits.push("Lemon");    // adds a new element (Lemon) to fruits
fruits[fruits.length] = "Lemon";    // adds a new element (Lemon) to fruits

// Associative Arrays
// Many programming languages support arrays with named indexes.
// Arrays with named indexes are called associative arrays (or hashes).
// JavaScript does not support arrays with named indexes.
// In JavaScript, arrays always use numbered indexes.

let person2 = [];
person2[0] = "John";
person2[1] = "Doe";
person2[2] = 46;
let x = person2.length;     // person.length will return 3
let y = person2[0];         // person[0] will return "John"



// let points = new Array();     // Bad
let points2 = Array();         // Bad
let points3 = [];             // Good

points =  Array(40, 100, 1, 5, 25, 10); // Bad
points = [40, 100, 1, 5, 25, 10];          // Good

// How to Recognize an Array
let b = typeof fruits;    // returns object

// To solve this problem ECMAScript 5 defines a new method Array.isArray():
Array.isArray(fruits);   // returns true

// To solve this problem you can create your own isArray() function:
function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}

// The instanceof operator returns true if an object is created by a given constructor:
fruits instanceof Array;   // returns true


