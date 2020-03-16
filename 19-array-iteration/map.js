// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.
// This example multiplies each array value by 2:

const numbers1 = [45, 4, 9, 16, 5];
let numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
    return value;
}

console.log(numbers2);


numbers2 = numbers1.map((value, index, array) => {
    return value;
});
console.log(numbers2);