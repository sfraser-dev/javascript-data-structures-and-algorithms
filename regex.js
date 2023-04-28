"use strict";

// test true or false
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
console.log("result="+result);

// test true or false
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
result = waldoRegex.test(waldoIsHiding);
console.log("result="+result);

// test true or false OR
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird/; // Change this line
result = petRegex.test(petString);
console.log("result="+result);

// test true or false Ignore case
myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
result = fccRegex.test(myString);
console.log("result="+result);

// extract word from string into variable (OPPOSITE way round from TESTING)
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
result = extractStr.match(codingRegex); // Change this line
console.log("result="+result);

// extract ALL (Global) the twinkles
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // Change this line
result = twinkleStar.match(starRegex); // Change this line
console.log("result="+result);

// wildcard period
let exampleStr = "Let's have fun run pun with regular expressions!";
let unRegex = /.un/gi; // Change this line
result = exampleStr.match(unRegex);
console.log("result="+result);

// match group of characters (put group of possible chars in [])
let quoteSample = "Beware of big bugs bags in the above code; I have not tried it.";
let vowelRegex = /b[iau]g/ig; // Change this line
result = quoteSample.match(vowelRegex); // Change this line
console.log("result="+result);
console.log(typeof(result));
console.log("result[0]="+result[0]);
console.log("result[1]="+result[1]);
console.log("result[2]="+result[2]);

// grab all the letters in the string using char group range
quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
result = quoteSample.match(alphabetRegex); // Change this line
console.log("result="+result);

// grab all the letters and all the numbers in the string
quoteSample = "Blueberry 3.141592653s are delicious.";
myRegex = /[a-z0-9]/ig; // Change this line
result = quoteSample.match(myRegex); // Change this line
console.log("result="+result);

// negated group of chars [^abc]; 
// grab all chars not a number or a vowel
quoteSample = "3 blind mice.";
myRegex = /[^0-9aeiou]/g; // Change this line
result = quoteSample.match(myRegex); // Change this line
console.log("result="+result);

// match chars that occur one or more times: one or more +
let difficultSpelling = "Mississippi sssssss";
myRegex = /s+/g; // Change this line
result = difficultSpelling.match(myRegex);
console.log("result="+result);// Only change code below this line

// match chars that occur zero or more times: zero or more *
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"; 
let chewieRegex = /Aa*/; // Change this line
result = chewieQuote.match(chewieRegex);
console.log("result="+result);

// default is greedy matching (biggest match), can also do lazy matching (smallest match ?)
let text = "<h1>Winter is coming</h1>";
myRegex = /<.*>/; // Change this line
result = text.match(myRegex);
console.log("result="+result);
myRegex = /<..?>/; // Change this line
result = text.match(myRegex);
console.log("result="+result);

// Fiind criminals (capital C) 
text = "dhjewkdwcCCCccswwdkCCswccCChsw";
myRegex = /C+/g; // Change this line
result = text.match(myRegex);
console.log("result="+result);