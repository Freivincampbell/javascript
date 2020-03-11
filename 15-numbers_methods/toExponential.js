// toExponential() returns a string, with a number rounded and written using exponential notation.
// A parameter defines the number of characters behind the decimal point:

let x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0

