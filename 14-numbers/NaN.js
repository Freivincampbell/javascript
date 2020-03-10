// NaN is a JavaScript reserved word indicating that a number is not a legal number.
// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

var x = 100 / "Apple";  // x will be NaN (Not a Number)

var x = 100 / "10";     // x will be 10

var x = 100 / "Apple";
console.log(isNaN(x));               // returns true because x is Not a Number


var x = NaN;
var y = 5;
var z = x + y;         // z will be NaN
console.log(isNaN(z));

var x = NaN;
var y = "5";
var z = x + y;         // z will be NaN5

typeof NaN;            // returns "number"


