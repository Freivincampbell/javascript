// The splice() method can be used to add new items to an array:

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted items:

fruits = ["Banana", "Orange", "Apple", "Mango"];
let x = fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(x);

fruits = ["Banana", "Orange", "Apple", "Mango"];
x = fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(x);

// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);        // Removes the first element of fruits
console.log(fruits);


// The first parameter (0) defines the position where new elements should be added (spliced in).
// The second parameter (1) defines how many elements should be removed.
// The rest of the parameters are omitted. No new elements will be added.

