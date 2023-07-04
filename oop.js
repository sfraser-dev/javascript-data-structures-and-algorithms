"use strict";

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

// "Instanceof" for objects created from constructor functions (true or false)
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
function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
console.log("num legs set via Dog.prototype.numLegs: " + beagle.numLegs);