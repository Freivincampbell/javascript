// The every() method check if all array values pass a test.
// This example check if all array values are larger than 18:


const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
console.log(allOver18);

allOver18 = numbers.every((value, index, array) => {
    return value > 18;
});
console.log(allOver18);

// Note that the function takes 3 arguments:
// The item value
// The item index
// The array itself
