// The slice() method slices out a piece of an array into a new array.
// This example slices out a part of an array starting from array element 1 ("Orange"):

let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1);

console.log(citrus);

// The slice() method creates a new array. It does not remove any elements from the source array.
// This example slices out a part of an array starting from array element 3 ("Apple"):

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
citrus = fruits.slice(3);

console.log(citrus);

// The slice() method can take two arguments like slice(1, 3).
// The method then selects elements from the start argument, and up to (but not including) the end argument.

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
citrus = fruits.slice(1, 3);

console.log(citrus);

// If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
citrus = fruits.slice(2);

console.log(citrus);





