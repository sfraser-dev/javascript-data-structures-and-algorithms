"use strict";

// Destructure simple object
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
// same variable names
const {today, tomorrow} = HIGH_TEMPERATURES;
console.log("today="+today);
console.log("tomorrow="+tomorrow);
// new variable names
const {today: newToday, tomorrow: newTomorrow} = HIGH_TEMPERATURES;
console.log("newToday="+newToday);
console.log("newTomorrow="+newTomorrow);

console.log("-------------------");
// Destructure nested object
const user = {
    johnDoe: {
        age: 34,
        weight: 120
    }
};
// same vaiable names
const {johnDoe : {age, weight}} = user;
console.log("age="+age);
console.log("weight="+weight);
// new vaiable names
const {johnDoe : {age: newAge, weight: newWeight}} = user;
console.log("newAge="+newAge);
console.log("newWeight="+newWeight);

console.log("-------------------");
// deconstruct array
const [a, b] = [1,2,3,4,5];
console.log("a="+a);
console.log("b="+b);
// deconstruct array using commas to reach desired element
const[c, d,,,e] = [1,2,3,4,5];
console.log("c="+c);
console.log("d="+d);
console.log("e="+e);
// deconstruct array with ...rest
const [f,g, ...restArr] = [1,2,3,4,5];
console.log("f="+f);
console.log("g="+g);
console.log("restArr="+restArr);

console.log("-------------------");
// deconstruct object passed as argument to function
const stats = {
    max: 100,
    mode: 23,
    median: 32,
    std: 4.32,
    min: 10
};
// deconstruct object passed as argument to normal function
function half1 (s) {
    const {max, min} = s;
    return (max+min)/2;
}
console.log("half1="+half1(stats));
// deconstruct object passed as argument to function expression
let half2 = function (s) {
    const {max, min} = s;
    return (max+min)/2;
};
console.log("half2="+half2(stats));
// deconstruct object passed as argument to arrow expression
let half3 = (s) => {
    const {max, min} = s;
    return (max+min)/2;
};
console.log("half3="+half3(stats));
// deconstruct object passed as argument to inline arrow expression
let half4 = ({max,min}) => (max+min)/2;
console.log("half4="+half4(stats)); 
