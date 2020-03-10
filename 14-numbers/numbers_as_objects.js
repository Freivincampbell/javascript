// Normally JavaScript numbers are primitive values created from literals:
// var x = 123;
// But numbers can also be defined as objects with the keyword new:
// var y = new Number(123);

let x = 123;
let y = Number(123);

// typeof x //returns number
// typeof y returns object

 x = 500;
 y = Number(500);

// (x == y) is true because x and y have equal values

 x = 500;
 y = Number(500);

// (x === y) is false because x and y have different types

 x = Number(500);
 y = Number(500);

// (x == y) is false because objects cannot be compared

// Note the difference between (x==y) and (x===y).
// Comparing two JavaScript objects will always return false.

