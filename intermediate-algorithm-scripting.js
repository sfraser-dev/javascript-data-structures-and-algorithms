"use strict";

////////////////////
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the
// sum of all the numbers between them. The lowest number will not always come first.
console.log("--- (1)");
function sumAll(arr) {
    // Get the high-end and low-end values passed
    let highEnd = Math.max(...arr);
    let lowEnd = Math.min(...arr);

    // Generate array from low-end to high-end
    let list = [];
    for (let i = lowEnd; i <= highEnd; i++) {
        list.push(i);
    }

    // Using reduce to sum the generated array (overkill, could have just used sum when
    // generating the array)
    let theSum = list.reduce(function (accumulator, element) {
        return accumulator + element;
    }, 0);
    return theSum;
}
console.log("sumAll([1, 4] -> " + sumAll([1, 4]));
console.log("sumAll([4, 1] -> " + sumAll([4, 1]));
console.log("sumAll([5, 10] -> " + sumAll([5, 10]));
console.log("sumAll([10, 5] -> " + sumAll([10, 5]));

////////////////////
// Compare two arrays and return a new array with any items only found in one of the two given arrays,
// but not both. In other words, return the symmetric difference of the two arrays.
console.log("\n--- (2)");
function diffArray(arr1, arr2) {
    // concatenate the arrays
    const newArr = arr1.concat(arr2);
    // create a set (unique values only) from the concatenated arrays
    const createSet = new Set(newArr);
    const setArr = [...createSet];

    let notInArr1 = [];
    let notInArr2 = [];
    // iterate through the values in the set and check to see if these values exist in either arr1 or arr2
    for (let i = 0; i < setArr.length; i++) {
        let arr1IndexOfSetValue = arr1.indexOf(setArr[i]);
        let arr2IndexOfSetValue = arr2.indexOf(setArr[i]);
        if (arr1IndexOfSetValue < 0) {
            // arr1 doesn't have this value from the concatenated set
            notInArr1.push(setArr[i])
        }
        if (arr2IndexOfSetValue < 0) {
            // arr2 doesn't have this value from the concatenated set
            notInArr2.push(setArr[i])
        }
    }
    let onlyInOneArr = notInArr1.concat(notInArr2);
    return onlyInOneArr;
}
console.log("diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5] -> " + diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log('[1, "calf", 3, "piglet"], [1, "calf", 3, 4] -> ' + diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log('[], ["snuffleupagus", "cookie monster", "elmo"] -> ' + diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
console.log('[1, "calf", 3, "piglet"], [7, "filly"] -> ' + diffArray([1, "calf", 3, "piglet"], [7, "filly"]));

////////////////////
// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments. Remove all elements from the initial array that are of
// the same value as these arguments.
console.log("\n--- (3)");
// The destroyer function only takes one argument, but more than 1 argument is passed to this
// function when called. Need to use Array.from(arguments) to get these additional arguments
function destroyer(arr) {
    // get the values to be removed from the function arguments
    const valsToRemove = Array.from(arguments).slice(1);
    // use filter function to create new array with the desired values removed
    let retArr = arr.filter(function (x) { return !(valsToRemove.includes(x)); })
    return retArr;
}
console.log("destroyer([1, 2, 3, 1, 2, 3], 2, 3) -> " + JSON.stringify(destroyer([1, 2, 3, 1, 2, 3], 2, 3)));
console.log("destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) -> " + JSON.stringify(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)));
console.log('destroyer(["tree", "hamburger", 53], "tree", 53] -> ' + JSON.stringify(destroyer(["tree", "hamburger", 53], "tree", 53)));

////////////////////
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that
// have matching name and value pairs (second argument). Each name and value pair of the source object has to be
// present in the object from the collection if it is to be included in the returned array.
console.log("\n--- (4)");
function whatIsInAName(collection, source) {
    // Get the key(s) from the object which was passed as the second argument
    const sourceKeys = Object.keys(source);
    console.log(sourceKeys);

    // If the collection object doesn't have a key/value pair that the source has, filter it out 
    // Iterate over the collection...
    let newCollection = collection.filter(function(object) {
        // For each key/value pair in a collection object...
        for (let i = 0; i < sourceKeys.length; i++) {
            // Does this collection object have all the key/value pairs that the source has?...
            // eg: if source["last"] !== object["last"], filter out this object
            // eg: if source["apple"] !== object["apple"], filter out this object
            if (source[sourceKeys[i]] !== object[sourceKeys[i]]) {
                return false;
            }
        }
        return true;
    });

    // Return filtered collection that only has the key/values that the source has
    return newCollection;
}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));

//// Methods used
// reduce()
// concat()
// new Set()
// indexOf()
// push()  [mutable]
// Array.from(arguments) [create an array from the arguments passed to a function]
// slice() [mutable]
// includes()
// Object.keys(obj) [get the keys from Object obj as an array]
