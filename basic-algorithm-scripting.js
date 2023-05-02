"use strict";

// fahrenheit to celsius
console.log("--fahrenheit to celsius");
function convertCtoF(celsius) {
    // let fahrenheit = 0;
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
let cel = 30;
console.log(`${cel} celsius is ${convertCtoF(30)} fahrenheit`);

// reverse a string (use split, reverse and join)
console.log("--reverse string");
let str = "Hello!";
// split string into array of chars via split("");
let splitStr = str.split("");
console.log("splitStr array = " + splitStr);
// reverse the array of chars
let revSplitStr = splitStr.reverse();
console.log("revSplitStr = " + revSplitStr);
// reverse a string on a single line. Note: need "" in split and reverse
let newStr = "Happy";
console.log("reversing newStr = " + newStr.split("").reverse().join(""));

// factorial using recursion
console.log("--factorial");
function factorialize(num) {
    if (num < 1) {
        return 1;
    }
    return num * factorialize(num - 1);
}
const numToFactorialize = 4;
console.log("the factorial of " + numToFactorialize + " is " + factorialize(numToFactorialize));

// find longest word in a string
console.log("--find longest word in a string");
function findLongestWordLength(str) {
    let strSplit = str.split(" ");
    let longest = 0;
    let word = "";
    for (let i = 0; i < strSplit.length; i++) {
        let currentWordLength = strSplit[i].length;
        if (currentWordLength > longest) {
            longest = currentWordLength;
            word = strSplit[i];
        }
    }
    return [word, longest];
}
let theStr = "The quick brown fox jumped over the lazy dog";
console.log(theStr);
console.log("longest word is: " + findLongestWordLength(theStr));

// return largest numbers in an array with sub-arrays
console.log("--return largest numbers in an array");
function largestOfFour(arr) {
    let retArr = [];
    for (let i = 0; i < arr.length; i++) {
        // make sure there is only 2 levels of deepness in the input array via flat function
        let flatArr = arr[i].flat();
        // find the maximum value in the in the flattened sub-array
        let maxValFromSubArray = Math.max(...flatArr);
        retArr.push(maxValFromSubArray);
    }
    return retArr;
}
let theArrIn = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
console.log("the input array:");
console.log(theArrIn);
let result = largestOfFour(theArrIn);
process.stdout.write("result array: ");
console.log(result);

// confirm the ending of a string (don't use built in .endsWith() method)
console.log("--confirm the ending of a string");
function confirmEnding(str, target) {
    let myRegex = new RegExp(`${target}$`)
    return myRegex.test(str);
}
// should return true
console.log("true result? = " + confirmEnding("Bastian", "n"));
console.log("true result? = " + confirmEnding("He has to give me a new name", "name"));
console.log("true result? = " + confirmEnding("Open sesame", "same"));
console.log("true result? = " + confirmEnding("Abstraction", "action"));
// should return false
console.log("false result? = " + confirmEnding("Connor", "n"));
console.log("false result? = " + confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log("false result? = " + confirmEnding("Open sesame", "sage"));
console.log("false result? = " + confirmEnding("Open sesame", "game"));
console.log("false result? = " + confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));

// repeats a string repeats a string (don't use build in repeats() method)
console.log("--repeats a string repeats a string");
function repeatStringNumTimes(str, num) {
    let newStr = "";
    if (num < 0) {
        return newStr;
    }
    for (let i=0; i<num; i++) {
        newStr += str;
    }
    return newStr;
}
console.log("repeat * 3 = " + repeatStringNumTimes("*", 3));
console.log("repeat * 5 = " + repeatStringNumTimes("*", 5));
console.log("repeat abc 3 = " + repeatStringNumTimes("abc", 3));
console.log("repeat abc 4 = " + repeatStringNumTimes("abc", 4));
console.log("repeat abc -2 = " + repeatStringNumTimes("abc", -2));
