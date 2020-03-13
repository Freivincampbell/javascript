// Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:

let fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];           // Changes the first element in fruits to undefined
console.log(fruits);

// Using delete may leave undefined holes in the array. Use pop() or shift() instead.


