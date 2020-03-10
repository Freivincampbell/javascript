// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: the start position, and the end position (end not included).
// This example slices out a portion of a string from position 7 to position 12 (13-1):

let str = "Apple, Banana, Kiwi";
let res = str.slice(7, 13);
console.log(res);

// If a parameter is negative, the position is counted from the end of the string.
// This example slices out a portion of a string from position -12 to position -6:

let res2 = str.slice(-12, -6);
console.log(res2);

// If you omit the second parameter, the method will slice out the rest of the string:

let res3 = str.slice(7);
console.log(res3);

let res4 = str.slice(-12);
console.log(res4);

