"use strict";

// Functional programming is a style of programming where solutions are simple, isolated functions.

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
// order functions"

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

///////////////////////////////////////////////////////////////////////////
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

// Using for loop
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

///////////////////////////////////////////////////////////////////////////

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
    ((value, index, array) =>
        {
            console.log('value :', value, 'index :', index, 'array :', array);
            return (value * 2);
        }
    );
console.log("which gives mapResult1...");
console.log(mapResult2);
console.log("or simply multiply all by 2 using concise arrow function...");
// arrow function with a single statement, no curly brackets needed and no return statement needed
console.log(sample.myMapImplementation(x => x*2));