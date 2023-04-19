"use strict";

function countdown(n) {
    // FOR-LOOP-TEST (recursion base): want to start adding to array on n=1, so return [] when n=0
    if (n < 1) {
        return [];
    } else {
        // FOR-LOOP-DECREMENT: i-- corresponds to n-1
        const countArray = countdown(n - 1);
        // FOR-LOOP-BODY, do at each increment: start adding to the beginning of the array
        countArray.unshift(n);
        return countArray;
    }
}

function countdownForLoop (n) {
    let arr = [];
    for (let i=n; i>0; i--) {
        arr.push(i);
    }
    return arr;
}

console.log("---------- recursion");
console.log(countdown(10)); 
console.log(countdown(5)); 
console.log("---------- for loop");
console.log(countdownForLoop(10)); 
console.log(countdownForLoop(5)); 