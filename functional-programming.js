"use strict";

// Functional programming is a style of programming where solutions are simple, isolated functions.

// Return 40 cups of tea for the FCC team 
console.log("\n--- 40 cups of tea");
const prepareTea = () => 'greenTea';
const getTea1 = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4TeamFCC = getTea1(40);
console.log("tea4TeamFCC = " + tea4TeamFCC);

//******************************************************************************** 
//*** First order functions, higher order functions and lambdas ******************
// Callbacks are functions that are passed to another function
// Functions can be assigend to a variable

// Functions that can be assigned a variable, passed to a function
// or returned from a function are called "first class functions"
// ALL JS functions are "first class" functions

// Functions that take a function as an argument are called "higher
// order functions"

// When functions are passed in to or returned from another function
// then those functions which were passed in or returned can be called
// a "lambda"
//******************************************************************************** 

console.log("\n--- lambda functions (callbacks)");
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';
const getTea2 = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea2(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea2(prepareBlackTea, 13);

console.log("tea4GreenTeamFCC = " + tea4GreenTeamFCC);
console.log("tea4BlackTeamFCC = " + tea4BlackTeamFCC);