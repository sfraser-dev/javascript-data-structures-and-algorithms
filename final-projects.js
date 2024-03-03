////////// Final project 1: Palindrome Checker
console.log("\n--- (Final project 1: Palindrome Checker)");
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward,
// ignoring punctuation, case, and spacing.
// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
// and turn everything into the same case (lower or upper case) in order to check for palindromes.
// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
function palindrome(strIn) {
    // get rid of non-alphanumerical chars using negated regex
    let alphanumericalString = strIn.replace(/[^0-9a-z]/gi, "");

    // convert to lower case
    alphanumericalString.toLowerCase();

    // do forward (normal) and reverse version of alphanumericalString match (ie: a palindrome)?
    let stringRevLowercase = alphanumericalString
        .split("")
        .reverse()
        .join("")
        .toLowerCase();
    let stringFwdLowercase = alphanumericalString.toLowerCase();
    // console.log(stringRevLowercase);
    // console.log(stringFwdLowercase);
    const isPalindrome = stringRevLowercase === stringFwdLowercase;
    return isPalindrome;
}

console.log(palindrome("eye")); // true
console.log(palindrome("_eye")); // true
console.log(palindrome("race car")); // true
console.log(palindrome("not a palindrome")); // false
console.log(palindrome("A man, a plan, a canal. Panama")); // true
console.log(palindrome("never odd or even")); // true
console.log(palindrome("nope")); // false
console.log(palindrome("almostomla")); // false
console.log(palindrome("My age is 0, 0 si ega ym.")); // true
console.log(palindrome("1 eye for of 1 eye.")); // false
console.log(palindrome("0_0 (: /- :) 0-0")); // true
console.log(palindrome("five|_/|four")); // false

////////// Final project 2: Roman Numeral Converter
console.log("\n--- (Final project 2: Roman Numeral Converter)");
//Convert the given number into a roman numeral.
// Roman numerals (left) Arabic numerals (right)
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I   	1
// All roman numerals answers should be provided in upper-case.
// I    1
// V    5
// X    10
// L    50
// C    100
// D    500
// M    1000
// When a symbol appears after a larger (or equal) symbol it is added
// But if the symbol appears before a larger symbol it is subtracted
// Don't use the same symbol more than three times in a row
// CM   900   // C can come before M and D
// CD   400
// XC   90    // X can come before C and L
// XL   40
// IX   9     // I can come before X and V
// IV   5
const arabicMappingObject = {
    1: 1,
    2: 4,
    3: 5,
    4: 9,
    5: 10,
    6: 40,
    7: 50,
    8: 90,
    9: 100,
    10: 400,
    11: 500,
    12: 900,
    13: 1000,
};

const romanMappingObject = {
    1: "I",
    2: "IV",
    3: "V",
    4: "IX",
    5: "X",
    6: "XL",
    7: "L",
    8: "XC",
    9: "C",
    10: "CD",
    11: "D",
    12: "CM",
    13: "M",
};
function convertToRoman(numIn) {
    let result = "";
    for (let i = 13; i > 0; --i) {
        const arabic = arabicMappingObject[i];
        const roman = romanMappingObject[i];
        while (arabic <= numIn) {
            result += roman;
            numIn -= arabic;
        }
    }
    return result;
}

console.log(convertToRoman(2)); // II
console.log(convertToRoman(3)); // III
console.log(convertToRoman(4)); // IV
console.log(convertToRoman(5)); // V
console.log(convertToRoman(9)); // IX
console.log(convertToRoman(12)); // XII
console.log(convertToRoman(16)); // XVI
console.log(convertToRoman(29)); // XXIX
console.log(convertToRoman(44)); // XLIV
console.log(convertToRoman(45)); // XLV
console.log(convertToRoman(68)); // LXVIII
console.log(convertToRoman(83)); // LXXXIII
console.log(convertToRoman(97)); // XCVII
console.log(convertToRoman(99)); // XCIX
console.log(convertToRoman(400)); // CD
console.log(convertToRoman(500)); // D
console.log(convertToRoman(501)); // DI
console.log(convertToRoman(649)); // DCXLIX
console.log(convertToRoman(798)); // DCCXCVIII
console.log(convertToRoman(891)); // DCCCXCI
console.log(convertToRoman(1000)); // M
console.log(convertToRoman(1004)); // MIV
console.log(convertToRoman(1006)); // MVI
console.log(convertToRoman(1023)); // MXXIII
console.log(convertToRoman(2014)); // MMXIV
console.log(convertToRoman(3999)); // MMMCMXCIX

////////// Final project 3: Caesar's Cipher
console.log("\n--- (Final project 3: Caesar's Cipher)");
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as
// a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by
// 13 places. Thus A ↔ N, B ↔ O and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces,
// punctuation), but do pass them on.
function rot13(strIn) {
    // regex to capture chars from the alphabet (case-insensitive)
    const alphabetRegex = /[a-zA-Z]/gi;

    // output
    let decodedCipher = "";

    // iterate through the encoded cipher (strIn)
    for (let i = 0; i < strIn.length; ++i) {
        // capture the current character
        const chr = strIn.charAt(i);

        // check if current char is alphabetic via regex?
        if (alphabetRegex.test(chr)) {
            // reset the regex's lastIndex property back to the start
            alphabetRegex.lastIndex = 0;

            // convert to ASCII code
            let asciiValue = chr.charCodeAt(0);

            // view ASCII table: https://www.asciitable.com/
            // uppercase letter handling
            if (asciiValue >= 65 && asciiValue <= 90) {
                // loop around uppercase chars if necessary
                if (asciiValue - 13 < 65) {
                    asciiValue = 91 - (65 - (asciiValue - 13));
                    // no looping necessary
                } else {
                    asciiValue -= 13;
                }
                // lowercase letter handling
            } else if (asciiValue >= 97 && asciiValue <= 122) {
                // loop around lowercase chars if necessary
                if (asciiValue - 13 < 97) {
                    asciiValue = 123 - (97 - (asciiValue - 13));
                    // no looping necessary
                } else {
                    asciiValue -= 13;
                }
            } else {
                console.log("error: missed all if statements");
            }

            // shifted asciiValue converted back to a char / string
            const decodedCharStr = String.fromCharCode(asciiValue);

            // Add the shifted character to the converted strIning
            decodedCipher += decodedCharStr;
        } else {
            // If the character is not alphabetic, simply add it as is
            decodedCipher += chr;
        }
    }

    // Return the converted strIning
    return decodedCipher;
}

console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); // FREE PIZZA!
console.log(rot13("SERR YBIR?")); // FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
console.log(rot13("serr pbqr pnzc 101")); // free code camp 101
console.log(rot13("orrs pnsr")); // beef cafe

////////// Final project 4: Telephone Number Validator
console.log("\n--- (Final project 4: Telephone Number Validator)");
// Return true if the passed string looks like a valid US phone number.
// The user may fill out the form field any way they choose as long as it has the format of
// a valid US number. The following are examples of valid formats for US numbers (refer to the
// tests below for other variants):
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
// Your job is to validate or reject the US phone number based on any combination of the formats provided
// above. The area code is required. If the country code is provided, you must confirm that the country
// code is 1. Return true if the string is a valid US phone number; otherwise return false.

function telephoneCheck(strIn) {
    // delete characters that are not numbers
    const numbersOnly = strIn.replace(/\D/g, "");
    // console.log(numbersOnly);
    // console.log(strIn.split("-").length - 1);

    // requirements for 10 digit numebers and for 11 digit numbers to be valid
    if (
        (numbersOnly.length === 10 &&
            // must have less than three hyphens
            strIn.split("-").length - 1 < 3 &&
            // cannot have any parenthesis if length is 10
            !strIn.includes("(") &&
            !strIn.includes(")")) ||
        (numbersOnly.length === 11 &&
            // must have less than three hyphens
            strIn.split("-").length - 1 < 3 &&
            // must start with a one if length is 11
            strIn.startsWith("1") &&
            // mustn't have single parenthesis (strIn with no parenthesis passes)
            !strIn.includes("(") &&
            !strIn.includes(")")) ||
        (numbersOnly.length === 11 &&
            // must have less than three hyphens
            strIn.split("-").length - 1 < 3 &&
            // must start with a one if length is 11
            strIn.startsWith("1") &&
            // mustn't have single parenthesis (strIn with open AND closed parenthesis passes)
            strIn.includes("(") &&
            strIn.includes(")"))
    ) {
        return true;
    }

    // check acceptable number formatting using regex
    if (
        // match string beginning with an opening parenthesis, followed
        // by exactly 3 digits, then a closing parenthesis, then
        // an optional hyphen or space, then exactly 3 digits, then
        // another optional hyphen or space, then exactly 4 digits at
        // the end
        strIn.match(/^\(\d{3}\)[- ]?\d{3}[- ]?\d{4}$/) ||
        // match string beginning with exactly 3 digits, then an
        // optional hyphen or space, then exactly 3 digits, then
        // another optional hyphen or space, then exactly 4 digits at
        // the end
        strIn.match(/^\d{3}[- ]?\d{3}[- ]?\d{4}$/)
    ) {
        return true;
    }

    // strIn hasn't adhered to any of the acceptable formats, thus rejected
    return false;
}

console.log(telephoneCheck("1 555-555-5555")); // true
console.log(telephoneCheck("1 (555) 555-5555")); // true
console.log(telephoneCheck("5555555555")); // true
console.log(telephoneCheck("555-555-5555")); // true
console.log(telephoneCheck("(555)555-5555")); // true
console.log(telephoneCheck("1(555)555-5555")); // true
console.log(telephoneCheck("555-5555")); // false
console.log(telephoneCheck("5555555")); // false
console.log(telephoneCheck("1 555)555-5555")); // false
console.log(telephoneCheck("1 555 555 5555")); // true
console.log(telephoneCheck("1 456 789 4444")); // true
console.log(telephoneCheck("123**&!!asdf#")); // false
console.log(telephoneCheck("55555555")); // false
console.log(telephoneCheck("(6054756961)")); // false
console.log(telephoneCheck("2 (757) 622-7382")); // false
console.log(telephoneCheck("0 (757) 622-7382")); // false
console.log(telephoneCheck("-1 (757) 622-7382")); // false
console.log(telephoneCheck("2 757 622-7382")); // false
console.log(telephoneCheck("10 (757) 622-7382")); // false
console.log(telephoneCheck("27576227382")); // false
console.log(telephoneCheck("(275)76227382")); // false
console.log(telephoneCheck("2(757)6227382")); // false
console.log(telephoneCheck("2(757)622-7382")); // false
console.log(telephoneCheck("555)-555-5555")); // false
console.log(telephoneCheck("(555-555-5555")); // false
console.log(telephoneCheck("(555)5(55?)-5555")); // false
console.log(telephoneCheck("55 55-55-555-5")); // false
console.log(telephoneCheck("11 555-555-5555")); // false

////////// Final project 5: Cash Register
console.log("\n--- (Final project 5: Cash Register)");
// Design a cash register drawer function checkCashRegister() that accepts purchase price
// as the first argument (price), payment as the second argument (cash), and cash-in-drawer
// (cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due,
// or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it
// is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills,
// sorted in highest to lowest order, as the value of the change key.
//   Currency             Unit    Amount
//   Penny                $0.01   (PENNY)
//   Nickel               $0.05   (NICKEL)
//   Dime                 $0.1    (DIME)
//   Quarter              $0.25   (QUARTER)
//   Dollar               $1      (ONE)
//   Five Dollars         $5      (FIVE)
//   Ten Dollars          $10     (TEN)
//   Twenty Dollars       $20     (TWENTY)
//   One-hundred Dollars  $100    (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:
// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

// check cash register and give change
function checkCashRegister(price, cash, cashInDrawer) {

    // object to store the value of each denomination
    const cashInDrawerObject = {
        PENNY: 0.01,
        NICKEL: 0.05,
        DIME: 0.1,
        QUARTER: 0.25,
        ONE: 1,
        FIVE: 5,
        TEN: 10,
        TWENTY: 20,
        "ONE HUNDRED": 100,
    };

    // calculate the change to give
    const calculateChange = () => {
        // loop through each denomination in reverse order
        for (let c = cashInDrawer.length - 1; c >= 0; --c) {
            const denomination = cashInDrawer[c][0];
            const denominationValue = cashInDrawerObject[denomination];
            // check conditions for giving change
            switch (true) {
                // if change is greater than or equal to
                // the denomination value and there is
                // enough of this denomination in the drawer
                case change >= denominationValue &&
                    change >= cashInDrawer[c][1]:
                    // add the whole denomination to the change
                    results.change.push(cashInDrawer[c]);
                    // subtract this denomination's value from
                    // the change remaining
                    change -= cashInDrawer[c][1];
                    // round to 2 decimal places
                    change = Math.round(change * 100) / 100;
                    break;
                // if change is greater than or equal to
                // the denomination value but there is not
                // enough of this denomination in the drawer
                case change >= denominationValue && change < cashInDrawer[c][1]:
                    // calculate the maximum amount that can be
                    // given for this denomination
                    const amount =
                        Math.floor(change / denominationValue) *
                        denominationValue;
                    // add the partial denomination to the change
                    results.change.push([denomination, amount]);
                    // subtract the value of this partial
                    // denomination from the change remaining
                    change -= amount;
                    // round to 2 decimal places
                    change = Math.round(change * 100) / 100;
                    break;
            }
        }
    };

    // calc total cash in drawer (via reduce method)
    const totalCashInDrawer = cashInDrawer.reduce((total, denomination) => {
        return total + denomination[1];
    }, 0);

    // initialise results object
    const results = { status: "", change: [] };

    // change to be given calculation
    let change = cash - price;

    // manage different situations regarding cash in
    // drawer and change to be given
    switch (true) {
        case change === totalCashInDrawer:
            // if required change equals total cash in drawer
            results.status = "CLOSED";
            results.change = cashInDrawer;
            return results;
        case change > totalCashInDrawer:
            // if there are insufficient funds in the drawer
            // to provide the required change
            results.status = "INSUFFICIENT_FUNDS";
            break;
        default:
            // calculate the change
            calculateChange(change, cashInDrawer, cashInDrawerObject, results);
            break;
    }

    // any change remaining?
    results.status = change >= 0.01 ? "INSUFFICIENT_FUNDS" : "OPEN";
    results.change = change >= 0.01 ? [] : results.change;

    return results;
}

console.log(
    checkCashRegister(19.5, 20, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
    ])
); // {status: "OPEN", change: [["QUARTER", 0.5]]}
console.log(
    checkCashRegister(3.26, 100, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
    ])
); // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
console.log(
    checkCashRegister(19.5, 20, [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
    ])
); // {status: "INSUFFICIENT_FUNDS", change: []}
console.log(
    checkCashRegister(19.5, 20, [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 1],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
    ])
); // {status: "INSUFFICIENT_FUNDS", change: []}
console.log(
    checkCashRegister(19.5, 20, [
        ["PENNY", 0.5],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
    ])
); // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
