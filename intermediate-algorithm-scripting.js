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
