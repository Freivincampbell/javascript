// Finding a String in a String
// The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:

let str = "Please locate where 'locate' occurs!";
let pos = str.indexOf("locate");
console.log(pos);

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

let pos2 = str.lastIndexOf("locate");
console.log(pos2);

// Both indexOf(), and lastIndexOf() return -1 if the text is not found.

let pos3 = str.lastIndexOf("John");
console.log(pos3);

// Both methods accept a second parameter as the starting position for the search:

let pos4 = str.indexOf("locate", 15);
console.log(pos4);

// Searching for a String in a String
// The search() method searches a string for a specified value and returns the position of the match:

let pos5 = str.search("locate");
console.log(pos5);

// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

