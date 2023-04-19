
function rangeOfNumbersForLoop(low, high) {
    let arr=[];
    for (let i=0; i<=Math.abs(high-low); i++){
        arr.push(low+i);
    }
    return arr;
}


// console.log("---------- recursion");
// console.count(rangeOfNumbers(1, 5)); // [1,2,3,4,5]
// console.count(rangeOfNumbers(6, 9)); // [6,7,8,9]
// console.count(rangeOfNumbers(4, 4)); // [4]
console.log("---------- for loop");
console.log(rangeOfNumbersForLoop(1, 5)); // [1,2,3,4,5]
console.log(rangeOfNumbersForLoop(6, 9)); // [6,7,8,9]
console.log(rangeOfNumbersForLoop(4, 4)); // [4]