let car;

car = { type:"Fiat", model:"500", color:"white" };

console.log(car);

//Object Definition

let person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};
console.log(person.firstName);


let person2 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person2.fullName());


