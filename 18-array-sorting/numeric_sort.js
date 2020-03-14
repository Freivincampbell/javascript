// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.
// You can fix this by providing a compare function:

let points = [40, 100, 1, 5, 25, 10];
points.sort(( a, b) => { return a - b });

console.log(points);

// Use the same trick to sort an array descending:

points.sort(( a, b) => { return b - a });

console.log(points);

// Sorting an Array in Random Order

points.sort((a, b) => { return 0.5 - Math.random() });

console.log(points);

points.sort((a, b) => { return a - b });
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value
console.log(points[0]); // lowest
console.log(points[ points.length - 1 ]); // highest

// Using Math.max() on an Array
// You can use Math.max.apply to find the highest number in an array:

let myArrayMax = (arr) =>  {
    return Math.max.apply(null, arr);
};

let x = myArrayMax([1, 2, 3]);

console.log(x);
// Math.max.apply(null, [1, 2, 3]);  is equivalent to Math.max(1, 2, 3).



let myArrayMin = (arr) => {
    return Math.min.apply(null, arr);
};

x = myArrayMin([1, 2, 3]);

console.log(x);
// Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).


// My Min / Max JavaScript Methods
// The fastest solution is to use a "home made" method.
// This function loops through an array comparing each value with the highest value found:

function myArrayMaxHomeMade(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}

function myArrayMinHomeMade(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}

// Sorting Object Arrays
// JavaScript arrays often contain objects:

let cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];

cars.sort((a, b) => { return a.year - b.year });

console.log(cars);

// Comparing string properties is a little more complex:

cars.sort((a, b) => {
    const x = a.type.toLowerCase();
    const y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});

console.log(cars);