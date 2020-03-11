// Number() can be used to convert JavaScript variables to numbers:

Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN

// If the number cannot be converted, NaN (Not a Number) is returned.


// Number() can also convert a date to a number:

Number(new Date("2017-09-30"));    // returns 1506729600000
