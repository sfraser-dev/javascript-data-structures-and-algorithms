"use strict";

// .test (boolean) and .match (return string) are applied in opposite directions
// regEx.test(string);  // regEx test calls string
// string.match(regEx); // string calls regex
// string.replace(regEx, "replacementString")
// string.replace(/(\w+)\s(\w+)/, "$2 $1") // swap words around with capture groups 

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
// note: there is no AND in regex (no need), but could hack a JS AND (let x = /regex1/ && /regex2/;)
// note: regex is AND by default as you add more regex tests to an expression
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
// + quantifier matches preceding element one or more time
let difficultSpelling = "Mississippi sssssss";
myRegex = /s+/g; // Change this line
result = difficultSpelling.match(myRegex);
console.log("result="+result);// Only change code below this line

// match chars that occur zero or more times: 
// * quantifier matches preceding element zero or more times
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

// \s match for whitespace (equivalent char set: [ \r\t\f\n\v])
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
result = sample.match(countWhiteSpace);
console.log("result="+result);

// \S match for whitespace (equivalent negated char set: [^ \r\t\f\n\v])
sample = "Whitespace is important in separating words";
countWhiteSpace = /\S/g; // Change this line
result = sample.match(countWhiteSpace);
console.log("result="+result);

// quantifier: {} quantity specifiers (select how many times preceding element repeated)
let ohStr = "Ohhh no";
let ohRegex = /Oh{3}/; // Change this line
result = ohRegex.test(ohStr); // true for Ohhh (and less than 3 "h")
console.log("result="+result);
// quantifier: {x,} quantity specifiers (select minimum amount of times preceding element repeated)
let haStr = "Hazzzzzah";
let haRegex = /Haz{3,}ah/; // min 3, no max
result = haRegex.test(haStr);
console.log("result="+result);
// quantifier: {,x} quantity specifiers (select maximum amount of times preceding element repeated)
haStr = "Hazzzzzah";
haRegex = /Haz{,3}ah/; // no min, max 3
result = haRegex.test(haStr);
console.log("result="+result);
// quantifier: {x,y} quantity specifiers (select a mim amount of times preceding element can repeat 
// and a maximum amount of times preceding element can repeat)
haStr = "Hazzzzzah";
haRegex = /Haz{3,4}ah/; // min 3, max 4 (false, z repeated 5 times)
result = haRegex.test(haStr);
console.log("result="+result);
// quantifier: {x,y} quantity specifiers (select a mim amount of times preceding element can repeat 
// and a maximum amount of times preceding element can repeat)
haStr = "Hazzzzzah";
haRegex = /Haz{3,7}ah/; // min 3, max 7 (true, x repeats 5 times, 3 <= x <= 7)
result = haRegex.test(haStr);
console.log("result="+result);

// ? quantifier: preceding element appears 0 or 1 times (preceding element is optional)
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
result = favRegex.test(favWord);
console.log("result="+result);
// ? quantifier: preceding element appears 0 or 1 times (preceding element is optional)
favWord = "colour";
favRegex = /colou?r/; // Change this line
result = favRegex.test(favWord);
console.log("result="+result);

// lookaheads (?=...) positive lookahead for ... existing, ... not matched though
// lookaheads (?!...) negative lookahead for ... not existing, ... not matched though
let sampleWord = "astronaut";
let pwRegex = /astro(?=naut)/; // Change this line
result = sampleWord.match(pwRegex); // returns "astro" (since "naut" exists ahead in the string)
console.log("result="+result);
// naively simple password checker that looks for between 3 and 6 characters and at least one number
let password = "abc123";
let passCheckRegex = /(?=\w{3,6})(?=\D*\d)/;
result = passCheckRegex.test(password);
result = /(?=\w{3,6})(?=\D*\d)/.test(password); // can do the regex like this too
console.log("result="+result);
// match passwords that are greater than 5 characters long, and have two consecutive digits
//-- Should pass
// sampleWord = "bana12";
// sampleWord = "abc123";
// sampleWord = "8pass99";
// sampleWord = "astr1on11aut";
//-- Should fail
// sampleWord = "astronaut";
sampleWord = "banan1";
// sampleWord = "12345";
// sampleWord = "1a2bcde";
// need to check for \D* too, allows for possible non-digits before the digits
passCheckRegex = /(?=\w{6,})(?=\D*\d{2,})/; 
result = passCheckRegex.test(sampleWord);
console.log("result="+result);

// Groups of chars ()... checks for a group of particular chars in order (not just individual chars in [])
let testStr = "Pumpkin";
result = /P(umpk|engu)in/.test(testStr);
console.log("result="+result);

// capture groups reuse patterns via temporary variables (starts counting at 1)
let repeatStr = "row row row your boat";
let repeatRegex = /(\w+) \1 \1/;
result = repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
console.log("result="+result);

// search and replace using capture groups (very powerful)
// capture the words separated by a space ($1 & $2) and use JS replace() to replace them
result = "Code Camp".replace(/(\w+)\s(\w+)/, "$2 $1");
console.log("result="+result);

// remove white space from start and end
let hello = "   Hello, World!  ";
let wsRegex = /\S+\s\S+/g; // grab non white space words
result = hello.match(wsRegex); // Change this line
console.log("result="+result);
// replace the whitespace via JS replace()
wsRegex = /^\s+|\s+$/g; // 
result = hello.replace(wsRegex, ""); // Change this line
console.log("result="+result);

// Lookaheads to behave like AND (But the AND operator is implicit in the RegExp syntax)
// /^(?=.*word1)(?=.*word2)(?=.*word3).*$/m