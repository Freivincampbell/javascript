// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

let myNumber = 2;
while (myNumber != Infinity) {   // Execute until Infinity
    myNumber = myNumber * myNumber;
}

let x =  2 / 0;       // x will be Infinity
let y = -2 / 0;       // y will be -Infinity

// Infinity is a number: typeof Infinity returns number.

typeof Infinity;     // returns "number"

