// Array indexes start with 0. [0] is the first array element, [1] is the second, [2] is the third .

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";        // Changes the first element of fruits to "Kiwi"
console.log(fruits);

// The length property provides an easy way to append a new element to an array:
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";          // Appends "Kiwi" to fruits
console.log(fruits);
