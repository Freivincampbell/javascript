// The concat() method creates a new array by merging (concatenating) existing arrays:

let myGirls = ["Cecilie", "Lone"];
let myBoys = ["Emil", "Tobias", "Linus"];
let myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys

console.log(myChildren);

// The concat() method does not change the existing arrays. It always returns a new array.

let arr1 = ["Cecilie", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let arr3 = ["Robin", "Morgan"];
let myKids = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3

console.log(myKids);

// The concat() method can also take values as arguments:

arr1 = ["Cecilie", "Lone"];
myChildren = arr1.concat(["Emil", "Tobias", "Linus"]);

console.log(myChildren);



