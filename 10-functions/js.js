function myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
}

myFunction(2, 2);


function name(parameter1, parameter2, parameter3) {
    // code to be executed
}

let x = myFunction2(4, 3);   // Function is called, return value will end up in x

function myFunction2(a, b) {
    return a * b;             // Function returns the product of a and b
}


function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

toCelsius(30);

const x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";
console.log(text);

 text = "The temperature is " + toCelsius(77) + " Celsius";
console.log(text);



// Local Variables

// code here can NOT use carName

function myFunction() {
    const carName = "Volvo";
    // code here CAN use carName
}

// code here can NOT use carName

