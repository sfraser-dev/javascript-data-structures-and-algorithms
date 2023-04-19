
function rangeOfNumbersForLoop(low, high) {
    let arr=[];
    for (let i=0; i<=Math.abs(high-low); i++){
        arr.push(low+i);
    }
    return arr;
}

function rangeOfNumbersRecursion(low, high) {
    // Base
    if (high < low) {
        return [];
    }
    // Iterate
    const arr = rangeOfNumbersRecursion(low, high-1);
    // Body
    arr.push(high);
    return arr;
}


console.log("---------- recursion");
console.log(rangeOfNumbersRecursion(1, 5)); // [1,2,3,4,5]
console.log(rangeOfNumbersRecursion(6, 9)); // [6,7,8,9]
console.log(rangeOfNumbersRecursion(4, 4)); // [4]
console.log("---------- for loop");
console.log(rangeOfNumbersForLoop(1, 5)); // [1,2,3,4,5]
console.log(rangeOfNumbersForLoop(6, 9)); // [6,7,8,9]
console.log(rangeOfNumbersForLoop(4, 4)); // [4]