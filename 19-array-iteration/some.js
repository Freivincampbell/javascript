// The some() method check if some array values pass a test.
// This example check if some array values are larger than 18:

const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

console.log(someOver18);

someOver18 = numbers.some((value, index, array) => {
    return value > 18;
});

// Note that the function takes 3 arguments:
// The item value
// The item index
// The array itself