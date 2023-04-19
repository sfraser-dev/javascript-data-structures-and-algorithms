
function rangeOfNumbersForLoop(startNum, endNum) {
    let arr=[];
    for (let i=0; i<=Math.abs(endNum-startNum); i++){
        arr.push(startNum+i);
    }
    return arr;
}

function rangeOfNumbersRecursion(startNum, endNum) {
    // Base
    if (endNum < startNum) {
        return [];
    }
    // Iterate
    const arr = rangeOfNumbersRecursion(startNum, endNum-1);
    // Body
    arr.push(endNum);
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