"use strict";

console.log("--splice remove array elements");
// splicing out values (and summing with reduce())
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
console.log("arr=" + arr);
// use array reduce function to reduce an array to a single value
// here, the arrow callback function iterates over array elements
// and sums them against an accumulator (initial accumulator=0)
let sum1 = arr.reduce((a, b) => a + b, 0);
console.log("sum1=" + sum1);
// make sum of array elements equal 10
arr.splice(1, 4);
let sum2 = arr.reduce((a, b) => a + b, 0);
console.log("arr=" + arr);
console.log("sum2 = " + sum2);

// add elements to array using splice
console.log("--add elements to array using splice");
const numbers = [10, 11, 12, 12, 15];
console.log("numbers=" + numbers);
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
console.log("numbers=" + numbers);

// splice remove 2 elements from start and add 2 elements in their place  
console.log("--splice remove 2 elements and add 2 elements");
console.log((["DarkGoldenRod", "WhiteSmoke", "LavenderBlush", "PaleTurquoise", "FireBrick"]));
function htmlColorNames(arr) {
    // starting at index 0, remove 2 elements, add in 2 more elements
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
    return arr;
}
console.log(htmlColorNames(["DarkGoldenRod", "WhiteSmoke", "LavenderBlush", "PaleTurquoise", "FireBrick"]));

// slice() copies or extracts a given number of elements to a new array
// it leaves the array it is called upon untouched
console.log("--slice an array to create a new array");
console.log(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"]);
function forecast(arr) {
    // make it warm and sunny only (from index x upto (but not including) y)
    arr = arr.slice(2, 4);
    return arr;
}
console.log(forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"]));

// Note:
// splice() changes the original array whereas slice() doesn't
// but both splice() and slice() returns array object

// ... spread operator for copying arrays with readable syntax
console.log("--spread operator for copying arrays with readable syntax");
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));

// spread operator for concatenating array
let arr1 = [1,2,3];
let arr2 = [4,5,6];
arr1=[...arr1, ...arr2];
console.log("arr1="+arr1);

