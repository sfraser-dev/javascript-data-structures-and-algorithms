"use strict";

// fahrenheit to celsius
console.log("--fahrenheit to celsius");
function convertCtoF(celsius) {
    let fahrenheit;
    fahrenheit = (celsius*9/5)+32;
    return fahrenheit;
}
let cel = 30;
console.log(`${cel} celsius is ${convertCtoF(30)} fahrenheit`);

// reverse string
console.log("--reverse string");
let str = "Hello";
let s = str.split();
let a = [1, 2, 3, 4];
let r = a.reverse();
console.log(r);
let t = r.concat([7, 8, 9]);
console.log(t);