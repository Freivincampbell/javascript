// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.

let str = "Apple, Banana, Kiwi";
let res = str.substr(7, 6);
console.log(res);

// If you omit the second parameter, substr() will slice out the rest of the string.

let res2 = str.substr(7);
console.log(res2);