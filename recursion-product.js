function multiply (arr, n) {
    console.log("n="+n);
    if (n <= 0) {
        return 1;
    }
    else {
        let ret = arr[n-1]*multiply(arr, n-1);
        console.log("ret="+ret);
    }
}

multiply([1,2,3,4,5],3);