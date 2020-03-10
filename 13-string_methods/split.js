// Converting a String to an Array
// A string can be converted to an array with the split() method:

let txt = "a,b,c,d,e";   // String

let a = txt.split(",");          // Split on commas
console.log(a);

let b = txt.split(" ");          // Split on spaces
console.log(b);

let c = txt.split("|");          // Split on pipe
console.log(c);
