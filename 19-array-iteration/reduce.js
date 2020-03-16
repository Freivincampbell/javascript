// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array. See also reduceRight().
// The reduce() method does not reduce the original array.

// This example finds the sum of all numbers in an array:

const numbers1 = [45, 4, 9, 16, 25];
let sum = numbers1.reduce(myFunction);

function myFunction(total, value, index, array) {
    return total + value;
}

console.log(sum);

sum = numbers1.reduce((total, value, index, array) => {
    return total + value;
});
console.log(sum);


// Note that the function takes 4 arguments:
// The total (the initial value / previously returned value)
// The item value
// The item index
// The array itself


// The reduce() method can accept an initial value:
sum = numbers1.reduce(myFunction, 100);
console.log(sum);
