"use strict";

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList() {
    // Only change code below this line

    const failureItems = [];

    // OBJs = OBJs = SAME
    let failurePropertyRef = result["failure"];
    for (let i=0; i<failurePropertyRef.length; i++){
        console.log(failurePropertyRef[i]);
        let theStr = `<li class="text-warning">${failurePropertyRef[i]}</li>`;
        failureItems.push(theStr);
    }


    // Only change code above this line

    return failureItems;
}

const failuresList = makeList();
console.log(failuresList);
