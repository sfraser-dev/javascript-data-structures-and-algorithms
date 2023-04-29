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

// match set of characters (set of chars in [] - "char set")
let quoteSample = "Beware of big bugs bags in the above code; I have not tried it.";
let vowelRegex = /b[iau]g/ig; // Change this line
result = quoteSample.match(vowelRegex); // Change this line
console.log("result="+result);
console.log(typeof(result));
console.log("result[0]="+result[0]);
console.log("result[1]="+result[1]);
console.log("result[2]="+result[2]);

// grab all the letters in the string using "char set" range
quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
result = quoteSample.match(alphabetRegex); // Change this line
console.log("result="+result);

// grab all the letters and all the numbers in the string ("char set" range)
quoteSample = "Blueberry 3.141592653s are delicious.";
myRegex = /[a-z0-9]/ig; // Change this line
result = quoteSample.match(myRegex); // Change this line
console.log("result="+result);

// negated set of chars [^abc] - "char set"; 
// grab all chars not a number or a vowel
quoteSample = "3 blind mice.";
myRegex = /[^0-9aeiou]/g; // Change this line
result = quoteSample.match(myRegex); // Change this line
console.log("result="+result);

// match chars that occur one or more times
// + matches preceding element one or more time
let difficultSpelling = "Mississippi sssssss";
myRegex = /s+/g; // Change this line
result = difficultSpelling.match(myRegex);
console.log("result="+result);// Only change code below this line

// match chars that occur zero or more times: 
// * matches preceding element zero or more times
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

// Find criminals (capital C) 
text = "dhjewkdwcCCCccswwdkCCswccCChsw";
myRegex = /C+/g; // Change this line
result = text.match(myRegex);
console.log("result="+result);

// Match beginning string patterns using ^
// Inside "char set" [], ^ negates, outside char set, it means beginning
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
result = calRegex.test(rickyAndCal); // true, Cal exists at line start
console.log("result="+result);

// Match end string patterns using $
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
result = lastRegex.test(caboose); // true, caboose exists at line end
console.log("result="+result);

// \w shorthand of all letters, num (&underscore) [A-Za-z0-9_], alphanumeric
quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
result = quoteSample.match(alphabetRegexV2); // get all chars
console.log("result="+result);
result = quoteSample.match(alphabetRegexV2).length; // count all chars
console.log("result="+result);

// \W shorthand of NON letters, num (& underscore) [^A-Za-z0-0_], non-alphanumeric
quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
result = quoteSample.match(nonAlphabetRegex); // get all non-alphanumeric
console.log("result="+result);
// count all non-alphanumeric (5 spaces and a full-stop)
result = quoteSample.match(nonAlphabetRegex).length; 
console.log("result="+result);

// \d shorthand match all numbers [0-9]
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
result = movieName.match(numRegex);
console.log("result="+result);
result = movieName.match(numRegex).length;
console.log("result="+result);

// \D shorthand match all NON numbers [^0-9]
movieName = "2001: A Space Odyssey";
numRegex = /\D/g; // Change this line
result = movieName.match(numRegex);
console.log("result="+result);
result = movieName.match(numRegex).length;
console.log("result="+result);

// restric username test
// Usernames can only use alpha-numeric characters.
// The only numbers in the username have to be at the end.
// There can be zero or more of them at the end.
// Username cannot start with the number.
// Username letters can be lowercase and uppercase.
// Usernames have to be at least two characters long.
// A two-character username can only use alphabet letters as characters.
//-- These should pass
// let userName = "JackOfAllTrades";
// let userName = "Jo";
// let userName = "Oceans11";
// let userName = "RegexGuru";
let userName = "Z97";
// let userName = "AB1";
//--These should fail
// let userName = "J";
// let userName = "007";
// let userName = "A1";
// let userName = "BadUs3rnam3";
// let userName = "c57bT3";
// let userName = "J%4";
// first char must be letter, second char must be letter (at least one or more of these)
let userCheck = /^[a-z][a-z]+/i;
// possibility of having a digit at the end too (occuring 0 or more times)
userCheck = /^[a-z][a-z]+\d*$/i; 
// OR it's possible to have a letter followed by another two or more numbers
// (must be two or more numbers as two char usernames can only be letters)
userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
result = userName.match(userCheck);
console.log("result="+result);
