// The filter() method creates a new array with array elements that passes a test.
// This example creates a new array from elements with a value larger than 18:


const numbers = [45, 4, 9, 16, 25];
let over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
console.log(over18);


 over18 = numbers.filter((value, index, array) => {
     return value > 18;
 });
console.log(over18);

