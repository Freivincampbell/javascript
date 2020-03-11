// valueOf() returns a number as a number.

let x = 123;
x.valueOf();            // returns 123 from variable x
(123).valueOf();        // returns 123 from literal 123
(100 + 23).valueOf();   // returns 123 from expression 100 + 23


// In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).
// The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.
// There is no reason to use it in your code.