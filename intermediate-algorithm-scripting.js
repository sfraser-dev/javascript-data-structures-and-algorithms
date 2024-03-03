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
            notInArr1.push(setArr[i]);
        }
        if (arr2IndexOfSetValue < 0) {
            // arr2 doesn't have this value from the concatenated set
            notInArr2.push(setArr[i]);
        }
    }
    let onlyInOneArr = notInArr1.concat(notInArr2);
    return onlyInOneArr;
}
console.log(
    "diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5] -> " +
        diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
);
console.log(
    '[1, "calf", 3, "piglet"], [1, "calf", 3, 4] -> ' +
        diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])
);
console.log(
    '[], ["snuffleupagus", "cookie monster", "elmo"] -> ' +
        diffArray([], ["snuffleupagus", "cookie monster", "elmo"])
);
console.log(
    '[1, "calf", 3, "piglet"], [7, "filly"] -> ' +
        diffArray([1, "calf", 3, "piglet"], [7, "filly"])
);

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
    let retArr = arr.filter(function (x) {
        return !valsToRemove.includes(x);
    });
    return retArr;
}
console.log(
    "destroyer([1, 2, 3, 1, 2, 3], 2, 3) -> " +
        JSON.stringify(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
);
console.log(
    "destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) -> " +
        JSON.stringify(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))
);
console.log(
    'destroyer(["tree", "hamburger", 53], "tree", 53] -> ' +
        JSON.stringify(destroyer(["tree", "hamburger", 53], "tree", 53))
);

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
    let newCollection = collection.filter(function (object) {
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
console.log(
    whatIsInAName(
        [
            { first: "Romeo", last: "Montague" },
            { first: "Mercutio", last: null },
            { first: "Tybalt", last: "Capulet" },
        ],
        { last: "Capulet" }
    )
);
console.log(
    whatIsInAName(
        [
            { apple: 1, bat: 2 },
            { apple: 1 },
            { apple: 1, bat: 2, cookie: 2 },
            { bat: 2 },
        ],
        { apple: 1, bat: 2 }
    )
);
console.log(
    whatIsInAName(
        [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
        { apple: 1, cookie: 2 }
    )
);

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
// filter()
// replace(/(group1)(group2)/g, "$1 $2") [$1 is group1 match, $2 is group2 match]
// toLowerCase()

////////////////////
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
console.log("\n--- (5)");
function spinalCase(str) {
    // replace match of "lowercaseUPPERCASE" text with "lowercase UPPERCASE"
    let newStr1 = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    // regex for white space and underscores
    let myRegex = /\s+|_+/g;
    // replace spaces and underscores with hyphens
    let newStr2 = newStr1.replace(myRegex, "-");
    // convert to lowercase
    let newStr3 = newStr2.toLowerCase();
    return newStr3;
}
console.log(
    "spinalCase('This Is Spinal Tap') -> " + spinalCase("This Is Spinal Tap")
);
console.log(
    "spinalCase('thisIsSpinalTap') -> " + spinalCase("thisIsSpinalTap")
);

//////////////////// Pig Latin (all inputs are lowercase)
// - If a word begins with a consonant, take the first consonant or consonant
//   cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.
console.log("\n--- (6) Pig Latin");
function translatePigLatin(str) {
    let constonantCount = 0;
    let constonantArray = [];
    let vowel = ["a", "e", "i", "o", "u"].includes(str[0]);
    // deal with vowel first letter
    if (vowel) {
        let newStr = str.concat("way");
        return newStr;
    }
    // deal with constonant first letter
    else {
        // first letter
        constonantCount++;
        constonantArray.push(str[0]);
        // possible cluster of constonants
        for (let i = 1; i < str.length; i++) {
            vowel = ["a", "e", "i", "o", "u"].includes(str[i]);
            if (vowel) {
                break;
            } else {
                constonantCount++;
                constonantArray.push(str[i]);
            }
        }
        // remove correct amount of constonants from the start of the string
        let sliceStr = str.slice(constonantCount, str.length);
        // perform concatonation of the strings
        let newStr = sliceStr.concat(...constonantArray).concat("ay");
        console.log(constonantArray);
        console.log(sliceStr);
        console.log(newStr);
        return newStr;
    }
}
translatePigLatin("cchhssonsonant");

////////// Search and Replace
console.log("\n--- (7)");
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
function myReplace(str, before, after) {
    // determine if "before" starts with lower or uppler case letter
    let lowerCase = false;
    let beforeFirstChar = before[0];
    if (beforeFirstChar === beforeFirstChar.toLowerCase()) {
        lowerCase = true;
    }

    // make case of "after's" first letter match that of "before's" first letter
    let afterNew = "";
    if (lowerCase) {
        afterNew = after[0].toLowerCase().concat(after.slice(1, after.length));
    } else {
        afterNew = after[0].toUpperCase().concat(after.slice(1, after.length));
    }

    // replace
    let newStr = str.replace(before, afterNew);
    console.log(afterNew);
    console.log(newStr);
    return newStr;
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("Let us go to the store", "store", "mall");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

////////// DNA Pairing
console.log("\n--- (8)");
// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented
// by the characters AT and CG, which form building blocks of the DNA double
// helix (AT, TA, GC, CG).
function pairElement(str) {
    str = str.split("").map((c) => {
        let ret = [];
        switch (c) {
            case "G":
                ret = ["G", "C"];
                break;
            case "C":
                ret = ["C", "G"];
                break;
            case "A":
                ret = ["A", "T"];
                break;
            case "T":
                ret = ["T", "A"];
                break;
            default:
                console.log("DNA switch error");
                break;
        }
        return ret;
    });
    return str;
}
console.log(pairElement("GCG")); //[["G", "C"], ["C","G"], ["G", "C"]]
console.log(pairElement("ATCGA")); //[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log(pairElement("TTGAG")); //[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
console.log(pairElement("CTCTA")); //[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]

////////// Missing Letter
console.log("\n--- (9)");
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
function fearNotLetter(str) {
    // Use charCodeAt to get a numeric UTF-16 code for each character.
    for (let i = 1; i < str.length; i++) {
        // Check if the difference between consecutive UTF-16 code isn't 1.
        if (str.charCodeAt(i) - str.charCodeAt(i - 1) !== 1) {
            // Calculate the missing character's code by adding 1 to the previous code.
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
    // If no missing letter is found, return undefined.
    return undefined;
}

console.log(fearNotLetter("abce")); // Output: "d"
console.log(fearNotLetter("abcdefghjklmno")); // Output: "i"
console.log(fearNotLetter("stvwx")); // Output: "u"
console.log(fearNotLetter("bcdf")); // Output: "e"
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // Output: undefined.

////////// Sorted Union
console.log("\n--- (10)");
// Write a function that takes two or more arrays and returns a new array of unique
// values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their
// original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final
// array should not be sorted in numerical order.

// There is an unknown number of arrays in argument list.
// Use the "rest" operator to put unknown amount of input parameters into an array of arrays
// - eg: ([1,3,2],[5,2,1,4],[2,1]) rested to [[1,3,2],[5,2,1,4],[2,1]]
function uniteUnique(...variableAmountOfArraysIn) {
    let numberoOfInputArrays = variableAmountOfArraysIn.length;
    console.log(numberoOfInputArrays);
    // eg: multi-dimensional [[1,3,2],[5,2,1,4],[2,1]] flattened to [1,3,2,5,2,1,4,2,1]
    const flattenedArray = variableAmountOfArraysIn.flat();
    // eg: get rid of duplicates by creating a set, eg: [1,3,2,5,2,1,4,2,1] to [1,3,2,5,4]
    const mySet = new Set(flattenedArray);
    // return mySet as an array
    return [...mySet];
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [1, 3, 2, 5, 4]
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // [1, 2, 3, 5]
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // [1, 2, 3, 5, 4, 6, 7, 8]
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6])); // [1, 3, 2, 5, 4, 6]
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])); // [1, 3, 2, 5, 4]

////////// Convert HTML Entities
console.log("\n--- (11)");
// Convert the characters &, <, >, " (double quote), and ' (apostrophe),
// in a string to their corresponding HTML entities.
// <=&lt; >=&gt; "=&quot; '=&apos; &=&amp;
function convertHTML(str) {
    // Create an object to store character / entity pairs
    const charEntity = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
        "&": "&amp;",
    };
    // Split the string into an array of individual characters.
    // Go over each individual character and use the charEntity
    // pairings and a short-circuited OR to change the necessary
    // individual characters (if charEntity[individualChar]
    // doesn't exist, it'll be undefined ("falsey"), thus
    // "individualChar" will be returned from the short-circuit.
    str = str.split("").map((individualChar) => {
        return charEntity[individualChar] || individualChar;
    });
    // Rejoin the individual characters back into a string.
    return str.join("");
}
console.log(convertHTML("Dolce & Gabbana")); //Dolce &amp; Gabbana
console.log(convertHTML("Hamburgers < Pizza < Tacos")); //Hamburgers &lt; Pizza &lt; Tacos
console.log(convertHTML("Sixty > twelve")); //Sixty &gt; twelve
console.log(convertHTML('Stuff in "quotation marks"')); //Stuff in &quot;quotation marks&quot;
console.log(convertHTML("Schindler's List")); //Schindler&apos;s List
console.log(convertHTML("<>")); //&lt;&gt;.
console.log(convertHTML("abc")); //abc

////////// Sum All Odd Fibonacci Numbers
console.log("\n--- (12)");
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are
//less than or equal to num.
// The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number
// in the sequence is the sum of the two previous numbers. The first seven numbers of
// the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.
function sumFibs(num) {
    let sumTotal = 0;
    // starting with "0, 1" as the first two numbers in the Fib sequence
    let previousNumber = 0;
    let currentNumber = 1;

    // {0, 1}, 1, 2, 3, 5, 8... we start at {0, 1}
    while (currentNumber <= num) {
        // we're only summing the odd numbers
        sumTotal += currentNumber % 2 !== 0 ? currentNumber : 0;

        // calculate the next number in the Fib sequence
        let previousNumberTemp = previousNumber;
        previousNumber = currentNumber;
        currentNumber += previousNumberTemp;
    }
    return sumTotal;
}
console.log(sumFibs(1)); // a number
console.log(sumFibs(1000)); // 1785
console.log(sumFibs(4000000)); // 4613732
console.log(sumFibs(4)); // 5
console.log(sumFibs(75024)); // 60696
console.log(sumFibs(75025)); // 135721

////////// Sum All Primes
console.log("\n--- (13)");
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
// For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast,
// 4 is not prime since it is divisible by 1, 2 and 4.
// Rewrite sumPrimes so it returns the sum of all prime numbers
// that are less than or equal to num
function sumPrimes(num) {
    let sumOfPrimes = 0;
    // look through the range of numbers [2..num-1], <=1 cannot be prime and num cannot be prime
    for (let n = 0; n <= num; n++) {
        // for each number in this range, check if it's a prime, if it's a prime,
        // then add it to the sum of primes
        sumOfPrimes += primeNumberCheck(n);
        console.log(`n = ${n}, sumOfPrimes = ${sumOfPrimes}\n-----`);
    }
    return sumOfPrimes;
}

function primeNumberCheck(intIn) {
    // edge cases, no primes below 2
    if (intIn <= 1) {
        return 0;
    } else {
        //-- for (let i = 2; i < intIn; ++i) {
        //-- speed up possible: say num=a*b, if "a"=6 & "b"=6, "num"=36. checking "b"=7 redundant as
        // "a" would have to be less than 6 (all already checked). Only need to check [2..sqrt(intIn)]
        // don't need to check 1 or the number itself.
        for (let i = 2; i * i <= intIn; ++i) {
            if (intIn % i === 0) {
                // factor found, thus, intIn is NOT a prime number
                return 0;
            }
        }
        // no factor found in for loop, thus, intIn IS a prime number
        return intIn;
    }
}

console.log(sumPrimes(10)); // 17
console.log(sumPrimes(977)); // 73156

////////// Smallest Common Multiple
console.log("\n--- (14)");
// Find the smallest common multiple of the provided parameters that can be evenly
// divided by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is
// also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
function smallestCommons(arr) {
    // sort the array from low to high
    arr.sort((a, b) => a - b);
    const [min, max] = arr;

    // initialise possible common multiple to the larger value
    // say we wanted to find the lowest common multiple (LCM) of values 4 and 6
    // multiples of 4: 4, 8,12,16,20,24,28,32
    // multiples of 6: 6,12,18,24,30,36,42,48
    // LCM of values 4 and 6 is 12, so we should test the multiples of 6,
    // the higher of the values, as this is definitely a multiple of 6, check to
    // see if it's also a multiple of 4
    let possibleLCM = max;

    // test our possible lowest common multiple and see if it is divisible by all of [min...max]
    while (!isCommonMultiple(possibleLCM, min, max)) {
        // if not a LCM, increment the higher of the values by itself
        possibleLCM += max;
    }

    return possibleLCM;
}

function isCommonMultiple(possibleLCM, min, max) {
    // iterate through all integers in [min...max] (inclusive) to check all are multiples
    for (let i = min; i <= max; i++) {
        if (possibleLCM % i !== 0) {
            // not a multiple, this is not the LCM, try another LCM
            return false;
        }
    }
    // LCM found
    return true;
}

console.log(smallestCommons([1, 5])); // 60
console.log(smallestCommons([5, 1])); // 60
console.log(smallestCommons([2, 10])); // 2550
console.log(smallestCommons([1, 13])); // 360360
console.log(smallestCommons([23, 18])); // 6056820

////////// Drop It
console.log("\n--- (15)");
// Given the array arr, iterate through and remove each element starting from the
// first element (the 0 index) until the function func returns true when the iterated
// element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise,
// arr should be returned as an empty array.
function dropElements(arr, callback) {
    // Find the first element where the callback function returns true
    let dropIndex = arr.findIndex(callback);

    // If no element meets the condition, return empty array, otherwise, use slice
    // function to return new array [dropIndex, arrLength) (dropIndex inclusive,
    // arrLength exclusive)
    return dropIndex === -1 ? [] : arr.slice(dropIndex, arr.length);
}

console.log(
    dropElements([1, 2, 3, 4], function (n) {
        return n >= 3;
    })
); // [3, 4]
console.log(
    dropElements([0, 1, 0, 1], function (n) {
        return n === 1;
    })
); // [1, 0, 1]
console.log(
    dropElements([1, 2, 3], function (n) {
        return n > 0;
    })
); // [1, 2, 3]
console.log(
    dropElements([1, 2, 3, 4], function (n) {
        return n > 5;
    })
); // []
console.log(
    dropElements([1, 2, 3, 7, 4], function (n) {
        return n > 3;
    })
); // [7, 4]
console.log(
    dropElements([1, 2, 3, 9, 2], function (n) {
        return n > 2;
    })
); // [3, 9, 2]

////////// Steamroller
console.log("\n--- (16)");
// Flatten a nested array. You must account for varying levels of nesting.
// Your solution should not use the Array.prototype.flat() or
// Array.prototype.flatMap() methods. Global variables should not be used.
const steamrollArray = function (arr) {
    let result = [];

    // iterate over array
    arr.forEach((element) => {
        // is element an array?
        if (Array.isArray(element)) {
            // if element is an array, flatten it by recursively calling steamrollArray()
            result = result.concat(steamrollArray(element));
        } else {
            // element is not an array, add it to the results array
            result.push(element);
        }
    });

    // returning a fully flattened array
    return result;
};

console.log(steamrollArray([[["a"]], [["b"]]])); // ["a", "b"]
console.log(steamrollArray([1, [2], [3, [[4]]]])); // [1, 2, 3, 4]
console.log(steamrollArray([1, [], [3, [[4]]]])); // [1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]])); // [1, {}, 3, 4]

////////// Binary Agents
console.log("\n--- (17)");
// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.
// split long input string of 1's and 0's into an array of individual binary codes
function binaryAgent(str) {
    const binaryCodeStringsArr = str.split(" ");
    // loop over each binary code in the array via the map function
    const characterArr = binaryCodeStringsArr.map(function (code) {
        // convert each binary code to the character it represents
        //-- parseInt(str,2) will convert the binary number (argument radix 2) in argument str to an int
        //-- fromCharCode(int) converts the int argument to a unicode char
        return String.fromCharCode(parseInt(code, 2));
    });
    //console.log(characterArr)
    return characterArr.join("");
}

console.log(
    binaryAgent(
        "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
    )
); // Aren't bonfires fun!?
console.log(
    binaryAgent(
        "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"
    )
); // I love FreeCodeCamp!

////////// Everything Be True
console.log("\n--- (18)");
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. The predicate pre will be an object
// property and you need to return true if its value is truthy. Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
// Remember, you can access object properties through either dot notation or [] notation.
function truthCheck(arrayOfObjects, key) {
    // array.every(testFunc) returns true if every element in the array passes a test (defined by testFunc)
    const isValueTruthyInAllObjects = arrayOfObjects.every(function (obj) {
        return obj[key];
    });
    return isValueTruthyInAllObjects;
}

console.log(
    truthCheck(
        [
            { name: "Quincy", role: "Founder", isBot: false },
            { name: "Naomi", role: "", isBot: false },
            { name: "Camperbot", role: "Bot", isBot: true },
        ],
        "isBot"
    )
); // false
console.log(
    truthCheck(
        [
            { name: "Quincy", role: "Founder", isBot: false },
            { name: "Naomi", role: "", isBot: false },
            { name: "Camperbot", role: "Bot", isBot: true },
        ],
        "name"
    )
); // true
console.log(
    truthCheck(
        [
            { name: "Quincy", role: "Founder", isBot: false },
            { name: "Naomi", role: "", isBot: false },
            { name: "Camperbot", role: "Bot", isBot: true },
        ],
        "role"
    )
); // false
console.log(
    truthCheck(
        [
            { name: "Pikachu", number: 25, caught: 3 },
            { name: "Togepi", number: 175, caught: 1 },
        ],
        "number"
    )
); // true
console.log(
    truthCheck(
        [
            { name: "Pikachu", number: 25, caught: 3 },
            { name: "Togepi", number: 175, caught: 1 },
            { name: "MissingNo", number: NaN, caught: 0 },
        ],
        "caught"
    )
); // false
console.log(
    truthCheck(
        [
            { name: "Pikachu", number: 25, caught: 3 },
            { name: "Togepi", number: 175, caught: 1 },
            { name: "MissingNo", number: NaN, caught: 0 },
        ],
        "number"
    )
); // false
console.log(
    truthCheck(
        [
            { name: "Quincy", username: "QuincyLarson" },
            { name: "Naomi", username: "nhcarrigan" },
            { name: "Camperbot" },
        ],
        "username"
    )
); // false
console.log(
    truthCheck(
        [
            {
                name: "freeCodeCamp",
                users: [{ name: "Quincy" }, { name: "Naomi" }],
            },
            { name: "Code Radio", users: [{ name: "Camperbot" }] },
            { name: "", users: [] },
        ],
        "users"
    )
); // true
console.log(
    truthCheck(
        [
            {
                id: 1,
                data: { url: "https://freecodecamp.org", name: "freeCodeCamp" },
            },
            {
                id: 2,
                data: {
                    url: "https://coderadio.freecodecamp.org/",
                    name: "CodeRadio",
                },
            },
            { id: null, data: {} },
        ],
        "data"
    )
); // true
console.log(
    truthCheck(
        [
            {
                id: 1,
                data: { url: "https://freecodecamp.org", name: "freeCodeCamp" },
            },
            {
                id: 2,
                data: {
                    url: "https://coderadio.freecodecamp.org/",
                    name: "CodeRadio",
                },
            },
            { id: null, data: {} },
        ],
        "id"
    )
); // false

////////// Arguments Optional (currying)
console.log("\n--- (19)");
// Create a function that sums two arguments together. If only one argument is provided,
// then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
//   var sumTwoAnd = addTogether(2);
//   sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.
function addTogether(firstArg, secondArg) {
    // firstArg is not a number
    if (typeof firstArg !== "number") {
        return undefined;
    }

    // firstArg is a number and secondArg is not defined
    else if (arguments.length === 1) {
        // currying: returning a function
        return function curryFunction(secondArg) {
            return typeof secondArg === "number"
                ? firstArg + secondArg
                : undefined;
        };
    }

    // firstArg is a number and secondArg is not a number
    else if (typeof secondArg !== "number") {
        return undefined;
    }

    // firstArg and secondArg both valid numbers
    else {
        return firstArg + secondArg;
    }
}

console.log(addTogether(2, 3)); // 5
console.log(addTogether(23.4, 30)); // 53.4
console.log(addTogether("2", 3)); // undefined
console.log(addTogether(5, undefined)); // undefined
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")); // undefined
console.log(addTogether(5)); // return a function
console.log(addTogether(5)(7)); // 12
console.log(addTogether(2)([3])); // undefined
console.log(addTogether(2, "3")); // undefined

////////// Currying
console.log("\n--- (19.5)---Currying side quest");
// Currying is when you break down a function that takes multiple
// arguments into a series of functions that each take only one argument
// It can be a way to use functions to make other functions
// https://stackoverflow.com/questions/36314/what-is-currying

// simple addition function
function simpleAdd(a, b) {
    return a + b;
}
console.log(`simpleAdd(3, 4)) = ${simpleAdd(3, 4)}`); // 7

// curry the addition function
function curryAdd(a) {
    return function (b) {
        return a + b;
    };
}
let curryAddEmpty = curryAdd(); // curryAddEmpty is a returned FUNCTION
let curryAdd3 = curryAdd(3); // curryAdd3 is a returned FUNCTION
let curryAdd3_4 = curryAdd(3)(4); // 7
let curryAddEmpty8 = curryAddEmpty(8); // NaN
console.log(`curryAddEmpty=${curryAddEmpty}`);
console.log(`curryAdd3=${curryAdd3}`);
console.log(`curryAdd3_4==${curryAdd3_4}`);
console.log(`curryAddEmpty8=${curryAddEmpty8}`);

/*
// What's happening when we call: let F=curryAdd(10) 
function curryAdd(a) {
    return function (b) {
        return 10 + b;
    };
}
// F=function(b) { return 10+b; }
*/

// Why curry functions at all? The simpleAdd is an EAGER operation,
// it's doing everything at once. Instead, by currying a function,
// we can step through it LAZILY (meaning we can 1: cache expensive
// operations and 2: achieve abstractions in the functional paradigm)
let doTheHardStuff = function (x) {
    let z = doSomethingComputationallyExpensive(x);
    return function (y) {
        return x + y;
    };
};
let doSomethingComputationallyExpensive = function (x) {
    return x;
};
let finishTheJob = doTheHardStuff(10);
let finishTheJob20 = finishTheJob(20);
let finishTheJob30 = finishTheJob(30);
console.log(`finishTheJob=${finishTheJob}`);
console.log(`finishTheJob(20)=${finishTheJob20}`);
console.log(`finishTheJob(30)=${finishTheJob30}`);

////////// Make a Person
console.log("\n--- (20)");
// Fill in the object constructor with the following methods below:
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(first, last)
// Run the tests to see the expected output for each method. These methods
// must be the only available means of interacting with the object. Each test
// will declare a new Person instance as new Person('Bob', 'Ross').
//
// You should not change the function signature.
// Waiting:You should not reassign the first parameter.
// Waiting:You should not reassign the last parameter.
// Waiting:No properties should be added. Object.keys(Person).length should always return 6.
// Waiting:You should be able to instantiate your Person object.
// Waiting:Your Person object should not have a firstName property.
// Waiting:Your Person object should not have a lastName property.

const Person = function (first, last) {
    let firstName = first;
    let lastName = last;

    this.getFirstName = () => firstName;

    this.getLastName = () => lastName;

    this.getFullName = () => `${firstName} ${lastName}`;

    this.setFirstName = (n) => {
        firstName = n;
    };

    this.setLastName = (n) => {
        lastName = n;
    };

    this.setFullName = (f, l) => {
        firstName = f;
        lastName = l;
    };
};

let bob1 = new Person("Bob", "Ross");
console.log(bob1.getFirstName()); // Bob

let bob2 = new Person("Bob", "Ross");
console.log(bob2.getLastName()); // Ross

let bob3 = new Person("Bob", "Ross");
console.log(bob3.getFullName()); // Bob Ross

let bob4 = new Person("Bob", "Ross");
bob4.setFirstName("Haskell");
console.log(bob4.getFullName()); // Haskell Ross

let bob5 = new Person("Bob", "Ross");
bob5.setLastName("Curry");
console.log(bob5.getFullName()); // Bob Curry

let bob6 = new Person("Bob", "Ross");
bob6.setFullName("Haskell Curry");
console.log(bob6.getFullName()); // Haskell Curry

let bob7 = new Person("Bob", "Ross");
bob7.setFullName("Haskell", "Curry");
console.log(bob7.getFirstName()); // Haskell

let bob8 = new Person("Bob", "Ross");
bob8.setFullName("Haskell", "Curry");
console.log(bob8.getLastName()); // Curry

let bob9 = new Person("Bob", "Ross");
bob9.setFullName("Emily Martinez", "de la Rosa");
console.log(bob9.getFullName()); // Emily Martinez de la Rosa

let bob10 = new Person("Bob", "Ross");
bob10.setFullName("Emily Martinez", "de la Rosa");
console.log(bob10.getFirstName()); // Emily Martinez

let bob11 = new Person("Bob", "Ross");
bob11.setFullName("Emily Martinez", "de la Rosa");
console.log(bob11.getLastName()); // de la Rosa

////////// Map the Debris
console.log("\n--- (21)");
// According to Kepler's Third Law, the orbital period T of two point masses orbiting
// each other in a circular or elliptic orbit is: 2*pi*sqrt(a^3/μ).
// "a" is the orbit's semi-major axis
// "μ"=GM is the standard gravitational parameter
// "G" is the gravitational constant,
// "M" is the mass of the more massive body.
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km^3s^(-2).
const orbitalPeriod = (objectArray) => {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    const returnArr = objectArray.map((s) => ({
        name: s.name,
        orbitalPeriod: Math.round(
            Math.sqrt((earthRadius + s.avgAlt) ** 3 / GM) * Math.PI * 2
        ),
    }));

    return returnArr;
};

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }])); // [{name: "sputnik", orbitalPeriod: 86400}]
console.log(
    orbitalPeriod([
        { name: "iss", avgAlt: 413.6 },
        { name: "hubble", avgAlt: 556.7 },
        { name: "moon", avgAlt: 378632.553 },
    ])
); // [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]

////////// Final project 1: Palindrome Checker
console.log("\n--- (Final project 1: Palindrome Checker)");
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward,
// ignoring punctuation, case, and spacing.
// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
// and turn everything into the same case (lower or upper case) in order to check for palindromes.
// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
function palindrome(strIn) {
    // get rid of non-alphanumerical chars using negated regex
    let alphanumericalString = strIn.replace(/[^0-9a-z]/gi, "");

    // convert to lower case
    alphanumericalString.toLowerCase();

    // do forward (normal) and reverse version of alphanumericalString match (ie: a palindrome)?
    let stringRevLowercase = alphanumericalString
        .split("")
        .reverse()
        .join("")
        .toLowerCase();
    let stringFwdLowercase = alphanumericalString.toLowerCase();
    console.log(stringRevLowercase);
    console.log(stringFwdLowercase);
    const isPalindrome = stringRevLowercase === stringFwdLowercase;
    return isPalindrome;
}

console.log(palindrome("eye")); // true
console.log(palindrome("_eye")); // true
console.log(palindrome("race car")); // true
console.log(palindrome("not a palindrome")); // false
console.log(palindrome("A man, a plan, a canal. Panama")); // true
console.log(palindrome("never odd or even")); // true
console.log(palindrome("nope")); // false
console.log(palindrome("almostomla")); // false
console.log(palindrome("My age is 0, 0 si ega ym.")); // true
console.log(palindrome("1 eye for of 1 eye.")); // false
console.log(palindrome("0_0 (: /- :) 0-0")); // true
console.log(palindrome("five|_/|four")); // false

////////// Final project 2: Roman Numeral Converter
console.log("\n--- (Final project 2: Roman Numeral Converter)");
//Convert the given number into a roman numeral.
// Roman numerals (left) Arabic numerals (right)
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I   	1
// All roman numerals answers should be provided in upper-case.
// I    1
// V    5
// X    10
// L    50
// C    100
// D    500
// M    1000
// When a symbol appears after a larger (or equal) symbol it is added
// But if the symbol appears before a larger symbol it is subtracted
// Don't use the same symbol more than three times in a row
// CM   900   // C can come before M and D
// CD   400
// XC   90    // X can come before C and L
// XL   40
// IX   9     // I can come before X and V
// IV   5
const arabicMappingObject = {
    1: 1,
    2: 4,
    3: 5,
    4: 9,
    5: 10,
    6: 40,
    7: 50,
    8: 90,
    9: 100,
    10: 400,
    11: 500,
    12: 900,
    13: 1000,
};

const romanMappingObject = {
    1: "I",
    2: "IV",
    3: "V",
    4: "IX",
    5: "X",
    6: "XL",
    7: "L",
    8: "XC",
    9: "C",
    10: "CD",
    11: "D",
    12: "CM",
    13: "M",
};
function convertToRoman(numIn) {
    let result = "";
    for (let i = 13; i > 0; --i) {
        const arabic = arabicMappingObject[i];
        const roman = romanMappingObject[i];
        while (arabic <= numIn) {
            result += roman;
            numIn -= arabic;
        }
    }
    return result;
}

console.log(convertToRoman(2)); // II
console.log(convertToRoman(3)); // III
console.log(convertToRoman(4)); // IV
console.log(convertToRoman(5)); // V
console.log(convertToRoman(9)); // IX
console.log(convertToRoman(12)); // XII
console.log(convertToRoman(16)); // XVI
console.log(convertToRoman(29)); // XXIX
console.log(convertToRoman(44)); // XLIV
console.log(convertToRoman(45)); // XLV
console.log(convertToRoman(68)); // LXVIII
console.log(convertToRoman(83)); // LXXXIII
console.log(convertToRoman(97)); // XCVII
console.log(convertToRoman(99)); // XCIX
console.log(convertToRoman(400)); // CD
console.log(convertToRoman(500)); // D
console.log(convertToRoman(501)); // DI
console.log(convertToRoman(649)); // DCXLIX
console.log(convertToRoman(798)); // DCCXCVIII
console.log(convertToRoman(891)); // DCCCXCI
console.log(convertToRoman(1000)); // M
console.log(convertToRoman(1004)); // MIV
console.log(convertToRoman(1006)); // MVI
console.log(convertToRoman(1023)); // MXXIII
console.log(convertToRoman(2014)); // MMXIV
console.log(convertToRoman(3999)); // MMMCMXCIX

////////// Final project 3: Caesar's Cipher
console.log("\n--- (Final project 3: Caesar's Cipher)");
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as
// a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by
// 13 places. Thus A ↔ N, B ↔ O and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces,
// punctuation), but do pass them on.
function rot13(strIn) {
    // regex to capture chars from the alphabet (case-insensitive)
    const alphabetRegex = /[a-zA-Z]/gi;

    // output
    let decodedCipher = "";

    // iterate through the encoded cipher (strIn)
    for (let i = 0; i < strIn.length; ++i) {
        // capture the current character
        const chr = strIn.charAt(i);

        // check if current char is alphabetic via regex?
        if (alphabetRegex.test(chr)) {
            // reset the regex's lastIndex property back to the start
            alphabetRegex.lastIndex = 0;

            // convert to ASCII code
            let asciiValue = chr.charCodeAt(0);

            // view ASCII table: https://www.asciitable.com/
            // uppercase letter handling
            if (asciiValue >= 65 && asciiValue <= 90) {
                // loop around uppercase chars if necessary
                if (asciiValue - 13 < 65) {
                    asciiValue = 91 - (65 - (asciiValue - 13));
                    // no looping necessary
                } else {
                    asciiValue -= 13;
                }
                // lowercase letter handling
            } else if (asciiValue >= 97 && asciiValue <= 122) {
                // loop around lowercase chars if necessary
                if (asciiValue - 13 < 97) {
                    asciiValue = 123 - (97 - (asciiValue - 13));
                    // no looping necessary
                } else {
                    asciiValue -= 13;
                }
            } else {
                console.log("error: missed all if statements");
            }

            // shifted asciiValue converted back to a char / string
            const decodedCharStr = String.fromCharCode(asciiValue);

            // Add the shifted character to the converted strIning
            decodedCipher += decodedCharStr;
        } else {
            // If the character is not alphabetic, simply add it as is
            decodedCipher += chr;
        }
    }

    // Return the converted strIning
    return decodedCipher;
}

console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); // FREE PIZZA!
console.log(rot13("SERR YBIR?")); // FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
console.log(rot13("serr pbqr pnzc 101")); // free code camp 101
console.log(rot13("orrs pnsr")); // beef cafe

////////// Final project 4: Telephone Number Validator
console.log("\n--- (Final project 4: Telephone Number Validator)");
// Return true if the passed string looks like a valid US phone number.
// The user may fill out the form field any way they choose as long as it has the format of
// a valid US number. The following are examples of valid formats for US numbers (refer to the
// tests below for other variants):
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
// Your job is to validate or reject the US phone number based on any combination of the formats provided
// above. The area code is required. If the country code is provided, you must confirm that the country
// code is 1. Return true if the string is a valid US phone number; otherwise return false.

function telephoneCheck(strIn) {
    // delete characters that are not numbers
    const numbersOnly = strIn.replace(/\D/g, "");
    console.log(numbersOnly);
    console.log(strIn.split("-").length - 1);

    // requirements for 10 digit numebers and for 11 digit numbers to be valid
    if (
        (numbersOnly.length === 10 &&
            // must have less than three hyphens
            strIn.split("-").length - 1 < 3 &&
            // cannot have any parenthesis if length is 10
            !strIn.includes("(") &&
            !strIn.includes(")")) ||
        (numbersOnly.length === 11 &&
            // must have less than three hyphens
            strIn.split("-").length - 1 < 3 &&
            // must start with a one if length is 11
            strIn.startsWith("1") &&
            // mustn't have single parenthesis (strIn with no parenthesis passes)
            !strIn.includes("(") &&
            !strIn.includes(")")) ||
        (numbersOnly.length === 11 &&
            // must have less than three hyphens
            strIn.split("-").length - 1 < 3 &&
            // must start with a one if length is 11
            strIn.startsWith("1") &&
            // mustn't have single parenthesis (strIn with open AND closed parenthesis passes)
            strIn.includes("(") &&
            strIn.includes(")"))
    ) {
        return true;
    }

    // check acceptable number formatting using regex
    if (
        // match string beginning with an opening parenthesis, followed
        // by exactly 3 digits, then a closing parenthesis, then
        // an optional hyphen or space, then exactly 3 digits, then
        // another optional hyphen or space, then exactly 4 digits at
        // the end
        strIn.match(/^\(\d{3}\)[- ]?\d{3}[- ]?\d{4}$/) ||
        // match string beginning with exactly 3 digits, then an
        // optional hyphen or space, then exactly 3 digits, then
        // another optional hyphen or space, then exactly 4 digits at
        // the end
        strIn.match(/^\d{3}[- ]?\d{3}[- ]?\d{4}$/)
    ) {
        return true;
    }

    // strIn hasn't adhered to any of the acceptable formats, thus rejected 
    return false;
}

console.log(telephoneCheck("1 555-555-5555")); // true
console.log(telephoneCheck("1 (555) 555-5555")); // true
console.log(telephoneCheck("5555555555")); // true
console.log(telephoneCheck("555-555-5555")); // true
console.log(telephoneCheck("(555)555-5555")); // true
console.log(telephoneCheck("1(555)555-5555")); // true
console.log(telephoneCheck("555-5555")); // false
console.log(telephoneCheck("5555555")); // false
console.log(telephoneCheck("1 555)555-5555")); // false
console.log(telephoneCheck("1 555 555 5555")); // true
console.log(telephoneCheck("1 456 789 4444")); // true
console.log(telephoneCheck("123**&!!asdf#")); // false
console.log(telephoneCheck("55555555")); // false
console.log(telephoneCheck("(6054756961)")); // false
console.log(telephoneCheck("2 (757) 622-7382")); // false
console.log(telephoneCheck("0 (757) 622-7382")); // false
console.log(telephoneCheck("-1 (757) 622-7382")); // false
console.log(telephoneCheck("2 757 622-7382")); // false
console.log(telephoneCheck("10 (757) 622-7382")); // false
console.log(telephoneCheck("27576227382")); // false
console.log(telephoneCheck("(275)76227382")); // false
console.log(telephoneCheck("2(757)6227382")); // false
console.log(telephoneCheck("2(757)622-7382")); // false
console.log(telephoneCheck("555)-555-5555")); // false
console.log(telephoneCheck("(555-555-5555")); // false
console.log(telephoneCheck("(555)5(55?)-5555")); // false
console.log(telephoneCheck("55 55-55-555-5")); // false
console.log(telephoneCheck("11 555-555-5555")); // false

////////// Final project 5: Cash Register
console.log("\n--- (Final project 5: Cash Register)");
// Design a cash register drawer function checkCashRegister() that accepts purchase price
// as the first argument (price), payment as the second argument (cash), and cash-in-drawer
// (cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due,
// or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it
// is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills,
// sorted in highest to lowest order, as the value of the change key.
//   Currency             Unit    Amount
//   Penny                $0.01   (PENNY)
//   Nickel               $0.05   (NICKEL)
//   Dime                 $0.1    (DIME)
//   Quarter              $0.25   (QUARTER)
//   Dollar               $1      (ONE)
//   Five Dollars         $5      (FIVE)
//   Ten Dollars          $10     (TEN)
//   Twenty Dollars       $20     (TWENTY)
//   One-hundred Dollars  $100    (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:
// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]
function checkCashRegister(price, cash, cid) {
    let change;
    return change;
}

console.log(
    checkCashRegister(19.5, 20, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
    ])
); // {status: "OPEN", change: [["QUARTER", 0.5]]}
console.log(
    checkCashRegister(3.26, 100, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
    ])
); // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
console.log(
    checkCashRegister(19.5, 20, [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
    ])
); // {status: "INSUFFICIENT_FUNDS", change: []}
console.log(
    checkCashRegister(19.5, 20, [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 1],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
    ])
); // {status: "INSUFFICIENT_FUNDS", change: []}
console.log(
    checkCashRegister(19.5, 20, [
        ["PENNY", 0.5],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
    ])
); // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
