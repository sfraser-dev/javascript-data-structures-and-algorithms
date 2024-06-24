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
    // regex with user parameter
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
    for (let i = 0; i < num; i++) {
        newStr += str;
    }
    return newStr;
}
console.log("repeat * 3 = " + repeatStringNumTimes("*", 3));
console.log("repeat * 5 = " + repeatStringNumTimes("*", 5));
console.log("repeat abc 3 = " + repeatStringNumTimes("abc", 3));
console.log("repeat abc 4 = " + repeatStringNumTimes("abc", 4));
console.log("repeat abc -2 = " + repeatStringNumTimes("abc", -2));

// ARRAY: concat: (immutable) let bigArr = [1,2,3].concat([4,5,6]); // [1,2,3,4,5,6], flat single array
// ARRAY: slice (immutable) new=arr.slice(start, end) // start(0) & end(end) optional
// ARRAY: splice (mutable) arr.splice(start, amountToDelete, 13, 14); // 13,14 added
// ARRAY: reverse (mutable) arr.reverse(), reverse order of elements in an array
// ARRAY: toReverse (immutable) new=arr.toReverse(), reverse order of elements in an array
// ARRAY: pop (off of end) // for pushed arrays, [1,2,3].pop([4,5,6]) // [[1,2,3],[4,5,6]] not flat
// ARRAY: push (on to end) (mutable)
// ARRAY: unshift (on to start) (Perl uses unshift to read arguments passed to subroutine)
// ARRAY: shift (off of start) (mutable)
// ARRAY**: join (immutable), newStr=arr.join(seperatorToUseInNewStr)
//--
// STRING: concat: (immutable) fullName=firstName.concat(" "+lastName); // "+" str concat shorthand
// STRING: slice (immutable) newStr=str.slice(start,end), up to end, non inclusive (==substring)
// STRING: substring (immutable) newStr=str.substring(start,end), up to end, non inclusive (==slice)
// STRING**: newArr=str.split(separator) (immutable) // arr words split(" "), arr of chars split("")
//--
// STRING-REVERSE: str.split("").reverse().join("") // split str to arr, rev arr, join arr to str
//--
// Notes:
// all strings in JS are immutable (all primitives in JS are immutable)
// string.slice == string.substring (tiny diff in edge cases), bad design on JS part
// string.split can take a regular expression as input
// arr.sort((a,b) => a-b); // need the arrow function as it sorts the array alphabetically by default
// See also "functional-programming.js", it too has examples of these (and other) array and string methods
// "functional-programming.js" says best not to use mutable mthods whenever possible
//
// truncate a string (I'm trying it without a for loop - practice JS methods)
console.log("--truncate a string using JS methods");
function truncateString(str, num) {
    if (str.length > num) {
        // split string into an array of individual chars
        let elementsArray = str.split("");
        // slice array from 0 to num (not inclusive of num)
        let truncatedElementsArray = elementsArray.slice(0, num);
        // join elements in array into a single string
        let truncatedStr = truncatedElementsArray.join("");
        // append three dots to the end of the truncated string
        truncatedStr += "...";
        return truncatedStr;
    } else {
        return str;
    }
}
console.log("first 8: " + truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log("first 11: " + truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log("first 5: " + truncateString("Hello World!", 5));
let strRevTest = "String Reverse Test";
console.log(strRevTest.split("").reverse().join(""));

// truth test function (truth test function passed as argument)
console.log("--truth test function (truth test function passed as argument)");
function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

// LONG-WINDED
// capitalise all the first letters in a sentence (alsorest of the sentence to lower case)
// (uses split, push, slice, join, charAt, toUpperCase and toLowerCase)
console.log("--capitalise all the first letters in a sentence (rest of sentence to lower case)");
function titleCase(str) {
    // split sentence into individual words
    let words = str.split(" ");
    let newStrArr = [];
    for (let i = 0; i < words.length; i++) {
        // push the capitalised first letter to the newStr array
        newStrArr.push(words[i].charAt(0).toUpperCase());
        // push the rest of the word to newStrArr via string.split(1 to end)
        let restOfWord = words[i].slice(1)
        newStrArr.push(restOfWord.toLowerCase());
        // add a space after the word
        newStrArr.push(" ");
    }
    // finally convert the array of words (with spaces) to a string via arr.join
    let newStr = newStrArr.join("");
    // remove any whitepspace from front or end (with trim or with .replace(RegEx,"")
    // let newStrTrimmed = newStr.trim(); // see also, trimStart, trimEnd, padStart, padEnd
    let newStrTrimmed = newStr.replace(/^\s+|\s+$/gm, "");  // gm modifier is global and multiline
    return newStrTrimmed;
}
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

// AGAIN USING REGEX:
// capitalise all the first letters in a sentence (alsorest of the sentence to lower case)
// RegEx explanation
// Find all non-whitespace characters (\S)
// At the beginning of string (^) or after any whitespace character (\s)
console.log("--AGAIN: capitalise all the first letters in a sentence (rest of sentence to lower case)");
function titleCase(str) {
    return str
        .toLowerCase()
        .replace(/(^|\s)\S/g, L => L.toUpperCase());
}
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

// implant arr1 into arr2 starting at index n (leave original arrays unchanged)
console.log("implant arr1 into arr2 starting at index n (leave original arrays unchanged)");
function frankenSplice(arr1, arr2, n) {
    // copy arr2
    let newArr = [...arr2];
    // splice arr1 into arr2 starting at position n and deleting 0 elements
    newArr.splice(n, 0, ...arr1);
    return newArr;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
console.log(frankenSplice([1, 2, 3, 4], [], 0));

// Remove all falsy values from an array. Don't mutate array.
// Falsy values in JavaScript are: false, null, 0, "", undefined, and NaN.
console.log("--Remove all falsy values from an array. Don't mutate array.");
function bouncer(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] ? newArr.push(arr[i]) : null;
    }
    return newArr;
}
console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));

// sort array then return insert position of num to maintain correct order of numbers
console.log("--sort array then return insert position of num to maintain correct order of numbers");
function getIndexToIns(arr, num) {

    // sort the array (by number, not by letters!)
    arr.sort((a, b) => a - b);

    // write info to console without a newline
    process.stdout.write("sorted array: " + arr + ", num is: " + num + ", array insert position is: ");

    // check for empty array
    if (arr.length === 0) {
        return 0;
    }

    // check against largest number (at end of the sorted array)
    if (num > arr[arr.length - 1]) {
        return arr.length;
    }

    // check against rest of the sorted numbers in the array
    for (let i = 0; i < arr.length; i++) {
        if (num <= arr[i]) {
            return i;
        }
    }
}
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 20, 10], 19));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([], 1));

// does first string contain all the letters in the second string?
console.log("--does first string contain all the letters in the second string?");
function mutation(arr) {
    let firstStr = arr[0].toLowerCase();
    let secondStr = arr[1].toLowerCase();
    for (let i = 0; i < secondStr.length; i++) {
        if (new RegExp(`${secondStr[i]}+`).test(firstStr) === false) { // using regex with variable
            // if (firstStr.includes(secondStr[i]) === false) { // using str.includes()
            return false;
        }
    }
    return true;
}
console.log("false: " + mutation(["hello", "hey"]));
console.log("true: " + mutation(["hello", "Hello"]));
console.log("true: " + mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log("true: " + mutation(["Mary", "Army"]));
console.log("true: " + mutation(["Mary", "Aarmy"]));
console.log("true: " + mutation(["Alien", "line"]));
console.log("false: " + mutation(["hello", "neo"]));


// USING WHILE/FOR: split "arr" into chunks of "size" and return as 2d array
console.log("--WHILE/FOR: split arr into chunks of num and return as 2d array");
function chunkArrayInGroups(arr, size) {
    let bigArr = [];
    let littleArr = [];
    let arrCounter = 0;
    while (true) {
        for (let i = 0; i < size; i++) {
            littleArr.push(arr[arrCounter++]);
            if (arrCounter === arr.length) { break; }
        }
        // push appends the little arrays into the big array, concat just creates one big array
        bigArr.push(littleArr);
        littleArr = [];
        if (arrCounter === arr.length) { break; };
    }
    process.stdout.write("arr: " + arr + " size:" + size + " ");
    console.log(bigArr);
    return bigArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)

// USING WHILE/SPLICE: split "arr" into chunks of "size" and return as 2d array
console.log("--WHILE/SPLICE: split arr into chunks of num and return as 2d array");
function chunkArrayInGroups2(arr, size) {
    let arrCopy = [...arr];
    let bigArr = [];
    while (arr.length > 0) {
        // splice(startIndex, AmountToRemove, optionalAddIn, optionalAddIn...)
        bigArr.push(arr.splice(0,size));
    }
    process.stdout.write("arr: " + arrCopy + " size:" + size + " ");
    console.log(bigArr);
    return bigArr;
}
chunkArrayInGroups2(["a", "b", "c", "d"], 2);
chunkArrayInGroups2([0, 1, 2, 3, 4, 5], 3)
chunkArrayInGroups2([0, 1, 2, 3, 4, 5], 2)

// USING WHILE/FOR/SHIFT: split "arr" into chunks of "size" and return as 2d array
console.log("--WHILE/FOR/SHIFT: split arr into chunks of num and return as 2d array");
function chunkArrayInGroups3(arr, size) {
    let arrCopy = [...arr];
    let bigArr=[];
    let littleArr=[];
    while (arr.length > 0) {
        for (let i=0; i<size; i++) {
            littleArr.push(arr.shift());
        }
        bigArr.push(littleArr);
        littleArr=[];
    }
    process.stdout.write("arr: " + arrCopy + " size:" + size + " ");
    console.log(bigArr);
    return bigArr;
}
chunkArrayInGroups3(["a", "b", "c", "d"], 2);
chunkArrayInGroups3([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups3([0, 1, 2, 3, 4, 5], 2);

