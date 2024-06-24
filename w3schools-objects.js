"use strict";

// Constructor function for Person objects
// Note: vscode says that the Constructor Function may be converted to a class declaration
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function () {
        return this.firstName+" "+this.lastName;
    };
}
// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
console.log("My father is " + myFather.age + ".");
console.log("My mother is " + myMother.age + ".");
console.log("--------------------------");
// Adding a property to an existing object is easy
myFather.natioanlity = "English";
console.log("My father is " + myFather.natioanlity + ".");
console.log("My father's full name is "+ myFather.name());



