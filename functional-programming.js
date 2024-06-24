"use strict";

// Functional programming is a style of programming where solutions are simple, isolated functions.
// Functional programming is all about creating and using non-mutating functions.

// Principles of Functional Programming
// (1) Don't alter a variable or object (immutable functions preferred)
// (2) Declare function parameters (immutable functions preferred)

// Shouldn't use methods that are mutable (change the object they operate on, causes "side effects")
// Should use a immutable function (a "pure" function)
// See also "basic-algorithm-scripting.js"

//********************************************************************************
//*** First order functions, higher order functions and lambdas ******************

// Callbacks are functions that are passed to another function
// When functions are passed in to or returned from another function
// then those functions which were passed in or returned can be called
// a "lambda"

// Functions that can be saved as a variable, stored in an object,
// passed to a function or returned from a function are called "first
// class functions"
//
// ALL JS functions are "first class" functions

// Functions that take a function as an argument are called "higher
// order functions". Examples are map(), filter() and reduce().
// Note: map() and filter() are special cases of reduce()

//********************************************************************************

// 40 cups of tea for the FCC team
console.log("\n--- 40 cups of tea for the FCC team (no callbacks)");
const prepareTea = () => 'greenTea';
const getTea1 = (numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};
const tea4TeamFCC = getTea1(40);
console.log("tea4TeamFCC = " + tea4TeamFCC);

// Cups of tea using callbacks (lambdas)
console.log("\n--- cups of tea using lambda functions (callbacks)");
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';
const getTea2 = (prepareTea, numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

const tea4GreenTeamFCC = getTea2(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea2(prepareBlackTea, 13);

console.log("tea4GreenTeamFCC = " + tea4GreenTeamFCC);
console.log("tea4BlackTeamFCC = " + tea4BlackTeamFCC);

// Movie watchlist object start ///////////////////////////////////////////////
console.log("\n--- Film watchlist containing 5 films");
const watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];
// Movie watchlist object end ///////////////////////////////////////////////

// Functional programming immutable methods used here
// map()
// filter()
// slice()
// concat()
// reduce(callbackFn, initialVal) ... callbackFn(accumulator, currElement, index, array)
// sort() // compareFunction needed, alphabetical sort by default
// split()
// join()
// trim()
// toLowerCase()
// replace() // replaces first occurance
// replaceAll()
// every()
// some()

////////////////////
// Using for loop, create a new array of object where each object contains only title and rating
// from the watchlist
console.log("Using a for loop");
const ratings0 = [];
for (let i = 0; i < watchList.length; i++) {
    ratings0.push({ title: watchList[i]["Title"], rating: watchList[i]["imdbRating"] });
}
console.log("ratings0...");
console.log(JSON.stringify(ratings0));

// Using map arrow function instead - single statement in arrow function so return keyword not needed
// (passing our own written callback function) - immutable, watchlist uneffected
console.log("map (callback via arrow functions, single statement is automatically returned in arrow function)");
const ratings1 = watchList.map(x => ({
    title: x["Title"],
    rating: x["imdbRating"],
}));
console.log("ratings1");
console.log(ratings1);

// Using map "normal" function instead - only arrow functions don't need the return keyword for single statements
console.log("map (callback via 'normal' function and console.table() for pretty table");
const ratings2 = watchList.map(function (y) {
    return {
        title: y["Title"],
        rating: y["imdbRating"],
    }
});
console.log("ratings2");
console.table(ratings2);

////////////////////
// Writing my own version of the map function
console.log("\n--- Writing my own version of the map function");
console.log("The map function simple implementation (2x each element) on simple array [1,2,3]:");
const sample = [1, 2, 3];
const mapResult1 = sample.map(function (value, index, array) {
    console.log('value :', value, 'index :', index, 'array :', array);
    return (value * 2);
});
console.log("which gives mapResult1...");
console.log(mapResult1);

// My implementation of the Array map prototype function
Array.prototype.myMapImplementation = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        // (value, index, array)
        newArray.push(callback(this[i], i, this))
    }
    return newArray;
};
console.log("My version of the map function");
const mapResult2 = sample.myMapImplementation
    ((value, index, array) => {
        console.log('value :', value, 'index :', index, 'array :', array);
        return (value * 2);
    }
    );
console.log("which gives mapResult1...");
console.log(mapResult2);
console.log("or simply multiply all by 2 using concise arrow function...");
// arrow function with a single statement, no curly brackets needed and no return statement needed
console.log(sample.myMapImplementation(x => x * 2));

////////////////////
// Array.prototype.filter() is like map, execept it filters values based on a boolean truthy value
// For the movie watchlist, use map() and filter() to return an array of objects with only title
// and rating for each film (and only where imdb rating >= 8)
// First, use map()...
console.log("\n--- Using map and filter to create new array of filtered objects");
console.log("first using map to generate the new array of objects containing only title and rating...");
const ratings3 = watchList.map(x => ({
    title: x["Title"],
    rating: x["imdbRating"],
}));
console.log("ratings3...");
console.table(ratings3);
// Now filter()...
console.log("now filtering the resultant array to so only movies with rating >= 8 are present");
const ratings4 = ratings3.filter(x => x["rating"] >= 8);
console.log("ratings4...");
console.table(ratings4);
// Could do it all on one line...
const ratings5 = watchList.map(x => ({
    title: x["Title"],
    rating: x["imdbRating"],
})).filter(x => x["rating"] >= 8);
console.log("ratings5 (using only single statement)...");
console.table(ratings5);


////////////////////
// Writing my own implementation of the Arry protoype filter() method
console.log("\n--- Writing my own implementation of the Array protoype filter() method");
Array.prototype.myFilterImplementation = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (Boolean(callback(this[i], i, this)) === true) {
            newArray.push(this[i]);
        }
    }
    return newArray;
};
console.log("[23, 65, 98, 5, 13]... filter for divisiable by 2...");
console.log([23, 65, 98, 5, 13].myFilterImplementation(item => item % 2));
// indexOf returns first occurance of value) so should return [1, 2, 5]
console.log("[1, 1, 2, 5, 2]... filter by indexOf(element) equals index...");
console.log([1, 1, 2, 5, 2].myFilterImplementation((element, index, array) => array.indexOf(element) === index));

let ar1 = [1, 2, 3];
let ar2 = [...ar1];
console.log(ar1);
console.log(JSON.stringify(ar2));

////////////////////
// See also notes about array and string methods in basic-algorithm-scripting.js
// Slice (immutable)
console.log("\n--- Slice");
function sliceArray(anim, beginSlice, endSlice) {
    return anim.slice(beginSlice, endSlice);
}
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log('["Cat", "Dog", "Tiger", "Zebra", "Ant"] -> slice(1,3): ' + JSON.stringify(sliceArray(inputAnim, 1, 3)));

// Use slice (immutable) instead of splice (mutable)
function nonMutatingSplice(cities) {
    //return cities.splice(3);  // mutbale, best not to use splice
    return cities.slice(3, 5);
}
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
let lessCities = nonMutatingSplice(inputCities);
console.log('["Chicago", "Delhi", "Islamabad", "London", "Berlin"] -> slice(3,4): ' + JSON.stringify(lessCities));

////////////////////
// Concat (works the same on both arrays and strings)
console.log("\n--- Concat");
console.log("[1, 2, 3].concat([4, 5, 6]) -> " + JSON.stringify([1, 2, 3].concat([4, 5, 6])));
// Use concat (immutable) instead of push (mutable) to add elements onto the end of an array
function nonMutatingPush(original, newItem) {
    //return original.push(newItem);  // push mutates the array, better to use immutable methods
    return original.concat(newItem);
}
const first = [1, 2, 3];
const second = [4, 5];
console.log("[1, 2, 3].concat[4,5] -> " + nonMutatingPush(first, second));

////////////////////
// Reduce: reduce(callbackFn, initialValue)
// You can solve almost any array processing problem using the reduce method.
// In addition to the callback function, reduce has an additional parameter which takes
// an initial value for the accumulator. If this second parameter is not used, then the
// first iteration is skipped and the second iteration gets passed the first element
// of the array as the accumulator.
//
// The callback function (IN reduce()) accepts four arguments. The first argument is known
// as the ACCUMULATOR, which gets assigned the return value of the callback function from
// the previous iteration, the second is the CURRENT ELEMENT being processed, the third is
// the index of that element and the fourth is the array upon which reduce is called.

// 
// Sum the ages of all the users using reduce()
console.log("\n--- Reduce");
const users1 = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];
// in reduce's() callback function, sum is the accumulator and user is the current element
const sumOfAges1 = users1.reduce((sum, user) => sum + user.age, 0); // arrow function
const sumOfAges2 = users1.reduce((function (sum, user) { return sum + user.age; }), 0); // normal function
console.log("users1.reduce((sum, user) => sum + user.age, 0) -> " + sumOfAges1);
console.log("users1.reduce( (function(sum,user){return sum+user.age;}), 0) -> " + sumOfAges2);

// Reduce this users2 object to show just name as key and age as value ("name": "age") for each property
const users2 = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];
// in reduce's() callback function, obj is the accumulator and user is the current element
const usersObj = users2.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj;
}, {});
console.log("the original object...");
console.log(users2);
console.table(users2);
console.log("the reduced object...");
console.table(usersObj);
console.log(JSON.stringify(usersObj));
// Example of style we want to reduce the object to
console.log("style we want to reduce the object to...");
const testObjFormat = {
    "Fred": 35,
    "John": 27,
}
// Changing the value of a key in an object's property
testObjFormat["Fred"] = 42;
console.log(JSON.stringify(testObjFormat));
console.table(testObjFormat);

// Filter() and reduce() together
// Movie watchlist: find average movie rating of Christopher Nolan films
console.log("\n--- Nolan movie average IMDB rating via filter() and reduce()");
// Create new array of Nolan movie objects
const nolanMovies = watchList.filter(x => x["Director"] === "Christopher Nolan");
// Sum all the IMDB ratings via reduce
const sumOfAllNolanMoviesImdbRatings = nolanMovies.reduce(function (accumulator, element) {
    // Convert the string IMDB rating to a number
    return accumulator + Number(element["imdbRating"]);
}, 0)
console.log("Average IMDB rating of Nolan movies: " + sumOfAllNolanMoviesImdbRatings / nolanMovies.length);

//////////////////// filter() and map() together
// Problem: square an array of numbers, but only square the positive integers
console.log("Problem: square an array of numbers, but only square the positive integers");
const squareList = function (arr) {
    // greater than or equal to 0 and positive value checking
    let positiveIntegerArr = arr.filter(x => (x >= 0) && (Math.floor(x) === x));
    return positiveIntegerArr.map(x => x ** 2);
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log("original: [-3, 4.8, 5, 3, -3.2] -> " + JSON.stringify(squaredIntegers));

////////////////////
// Sort (mutable, mutates the array in place)
// JS sort method sorts alphabetically by default, so use a callback function, called "compareFunction"
// fix this issue. Array elements are sorted according to the return value of the compareFunction: If
// compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b
// (>0, b before a, ===0, unchanged).
console.log("\n--- Sorting");
const globalArraySrt = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    let newArr = [...arr];
    newArr.sort((a, b) => a - b);
    return newArr;
}
console.log("original: [5, 6, 3, 2, 9], sorted: " + nonMutatingSort(globalArraySrt));

////////////////////
// Split
// The split method splits a string into an array of strings. Remember strings are immutable
// Split takes an argument for a delimiter.
// If delimiter is a space (" "), we get an array of words. If delimiter is empty (""), we get an
// array of characters
console.log("\n--- Split strings via delimiters");
function splitify(str) {
    // Regex delimiter "w" is for letters, num (&underscore)
    // Regex delimiter "W" is for NON letters, NON num (& NON underscore)
    let newArr = str.split(/\W/);
    return newArr;
}
console.log(splitify("Hello World,I-am code"));

////////////////////
// Join
// Joins the elements in an array into a sting using the delimiter argument as the separator
console.log("\n--- Join");
const arr = ["Hello", "World"];
console.log('["Hello", "World"] -> arr.join(" ") -> ' + arr.join(" "));
function sentensify(str) {
    // Initially split on non letters, then join using space as delimiter
    let newArr = (str.split(/\W/)).join(" ");
    return newArr;
}
sentensify("May-the-force-be-with-you");
console.log("original: 'May-the-force-be-with-you' split().join() combo-> " + sentensify("May-the-force-be-with-you"));
console.log("or using replaceAll() instead of split().join()");
console.log('May-the-force-be-with-you".replaceAll("-", " ") -> ' + 'May-the-force-be-with-you'.replaceAll('-', ' '));

////////////////////
// Url Slug (hyphenate a sentence so it can be an URL slug), don't use replace
console.log("\n--- URL slug using split and join");
function urlSlug(title) {
    // lowercase
    let strArr1 = title.toLowerCase();
    //  trim whitespace at start and end
    let strArr2 = strArr1.trim();
    // split string on non alphanumeric characters (one or more in a row)
    let strArr3 = strArr2.split(/\W+/);
    // create URL slug by joining with hyphens
    let strArr4 = strArr3.join("-");
    return strArr4;
}
console.log("'A Mind Needs Books Like A Sword Needs A Whetstone' -> " + urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
console.log("' Winter is  Coming   ' -> " + urlSlug(" Winter is  Coming   "));
console.log("'Hold The Door' -> " + urlSlug("Hold The Door"));

////////////////////
// The every method
// every() works with arrays to check if EVERY element passes a particular test.
// It returns a BOOLEAN value - true if all values meet the criteria, false if not.
console.log("\n--- Every");
function checkPositiveAll(arr) {
    // Every() function with callback checking for positive values
    let boolVal = arr.every(function (elem) {
        return elem >= 0;
    });
    return boolVal;
}
console.log("checkPositive([1, 2, 3, -4, 5] via every() -> " + checkPositiveAll([1, 2, 3, -4, 5]));

////////////////////
// The some method
// some() works with arrays to check if SOME element passes a particular test.
// It returns a BOOLEAN value - true if ANY value meets the criteria, false if not.
console.log("\n--- Some");
function checkPositiveSome(arr) {
    // Some() function with callback checking for positive values
    let boolVal = arr.some(function (elem) {
        return elem >= 0;
    });
    return boolVal;
}
console.log("checkPositive([1, 2, 3, -4, 5] via some() -> " + checkPositiveSome([1, 2, 3, -4, 5]));
