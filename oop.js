"use strict";

// Classes are syntactical sugar added in ECMAScript 6 over the existing
// prototype based inheritance. Classes provide a much simplier and cleaner
// syntax to create objects and deal with inheritance. 
// See the ES6 section entitled "Use class Syntax to Define a Constructor Function"

// 1. objects
// 2. constructor functions
// 3. instanceof keyword (fido instanceof Dog - returns true or false)
// 4. hasOwnProperty() method (own property, not a (shared) prototype property)
// 5. Dog3.prototype.numLegs = 4; constructor functions have the prototype property,
//                                these prototype properties are shared amoung all
//                                instances of the object (all instances have same value)
// 6: prototype properties (of constructor functions) can be set all at once via an object  
// 7. Object.create(Object.prototype) is better than "new" key word for creating object instances

// Dog object
console.log("--- Dog object");
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + this.numLegs + " legs." }
};
console.log("dog name = " + dog.name);
console.log("dog number of legs = " + dog.numLegs);
console.log("dog method sayLegs(): " + dog.sayLegs());

// Dog constructor function
console.log("\n--- Dog constructor function");
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
let hound = new Dog();
console.log(hound.name);
console.log("for loop iterate through hound instance properties");
for (let prop in hound) {
    console.log(hound[prop]);
}

// Constructor with arguments
console.log("\n--- Dog constructor function with arguments");
function Dog2(name, color) {
    this.numLegs = 4;
    this.name = name;
    this.color = color;
}
let terrier = new Dog2("Spot", "brown");
console.log("for loop iterate through terrier instance properties");
for (let prop in terrier) {
    console.log(terrier[prop]);
}

// "instanceof" keyword for objects created from constructor functions (true or false)
console.log("\n--- Instanceof: is instantiated object and 'instanceof' a particular constructor function?");
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
let myHouse = new House(2);
console.log("myHouse instanceof House: " + (myHouse instanceof House));

// hasOwnProperty() function for instantiated objects
console.log("\n--- hasOwnProperty() function for instantiated objects");
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}
console.log("ownProps array: st of properties in canary object" + ownProps);

// Constructor functions have the prototype property.
// Properties in the prototype are shared amoung all instances of the Object.
console.log("\n--- Prototype property of constructor functions apply to all instances of object");
function Dog3(name) {
    this.name = name;
}
Dog3.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
console.log("num legs set via Dog.prototype.numLegs: " + beagle.numLegs);

// You have now seen two kinds of properties: own properties and prototype properties.
// Own properties are defined directly on the object instance itself. And prototype
// properties are defined on the prototype.
// Here is how you add beagle's own properties to the array ownProperties and
// prototype properties to the array prototypeProperties:
console.log("\n--- The distinction between ownProperties and prototypeProperties");
function Dog4(name) {
    this.name = name;
}
Dog4.prototype.numLegs = 4;
let dalmation = new Dog4("Snoopy");
let ownProperties = [];
let prototypeProperties = [];
for (let prop in dalmation) {
    if (dalmation.hasOwnProperty(prop)) {
        ownProperties.push(prop);
    }
    else {
        prototypeProperties.push(prop);
    }
}
console.log("ownProperties: " + ownProperties);
console.log("prototypeProperties: " + prototypeProperties);

// The constructor property.
console.log("--- The constructor property");
function Dog5(name) {
    this.name = name;
}
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog5) {
        return true;
    }
    else {
        return false;
    }
}
const fifthDog = new Dog5("Fiver");
console.log("fifthDog is a Dog5 object: " + joinDogFraternity(fifthDog));

// Change the prototype to a new object
// Until now, we've been adding properties to the prototypes individually,
// this becomes tedious
// More efficient to set the prototype to a new object that already contains the properties
// (ie: put the prototype properties in an object)
console.log("\n--- Change the prototype to a new object (prototype values in an object)");
function Dog6(name) {
    this.name = name;
}
// Beware, using new object to manually define prototype properties ERASES the constructor property! 
// Prototype object
Dog6.prototype = {
    // Define the constructor property here so it fixed the ERASING issue.
    constructor: Dog6,
    numLegs: 4,
    eat: function () { console.log("nom nom nom"); },
    describe: function () { console.log("My name is " + this.name) },
};
let sixer = new Dog6("Sixer");
console.log("sixer is eating via prototype...");
sixer.eat();
console.log("sixer description via prototype...");
sixer.describe();

// Objects inherit their prototypes from the constructor function that created it
console.log("\n--- isPrototypeOf()");
function Dog7(name) {
    this.name = name;
}
let labrador = new Dog7("Snoopy");
console.log("labrador isPrototypeOf Dog7? " + Dog7.prototype.isPrototypeOf(labrador));

// Prototype chain (inheritance beginnings, Object class is at the root)
console.log("\n--- Prototype chain");
function Dog8(name) {
    this.name = name;
}
let puppy = new Dog8("Snoopy");
Dog8.prototype.isPrototypeOf(beagle);  // yields true
console.log("Object class is prototype of Dog8 class? " + Object.prototype.isPrototypeOf(Dog8.prototype));


// Rather than use "new" keyword with a constructor function to create a new instance,
// we can Object.create(Object.protoype)
console.log("\n--- Using Object.create(Object.prototype) is better than using 'new' keyword");
function Test () {}
Test.prototype = {
    constructor: Test,
    numLegs: 2,
}
const myTest = Object.create(Test.prototype);
console.log("myTest numLegs: " + myTest.numLegs);

// Inheritance via prototype so you don't repeat yourself (DRY)
function Animal() { }
Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};
function Duck() { }
Bird.prototype = Object.create(Animal.prototype);
// Change Bird constructor from Animal to Bird
Bird.prototype.constructor = Bird;
// Give Bird its own unique function.
Bird.prototype.fly = function() {
    console.log("I'm flying!");
}
// Bird can now eat and fly 
let duck = new Bird();
console.log("duck is about to eat (Animal prototype function)...");
duck.eat()
console.log("duck is about to fly (Bird prototype function)...");
duck.fly();
