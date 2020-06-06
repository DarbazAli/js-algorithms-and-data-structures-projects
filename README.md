# JavaScript Algorithms and Data Structures Projects -- freeCodeCamp

## 01) Data Structures Projects: Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

**palindrome("eye") should return true.**\
**palindrome("_eye") should return true.**\
**palindrome("race car") should return true.**\
**palindrome("not a palindrome") should return false.**\
**palindrome("A man, a plan, a canal. Panama") should return true.**\
**palindrome("never odd or even") should return true.**\
**palindrome("nope") should return false.**\
**palindrome("almostomla") should return false.**\
**palindrome("My age is 0, 0 si ega ym.") should return true.**\
**palindrome("1 eye for of 1 eye.") should return false.**\
**palindrome("0_0 (: /-\ :) 0-0") should return true.**\
**palindrome("five|\_/|four") should return false.**


```javascript

const palindrome = str => {

   // lowercase the string
   str = str.toLowerCase();

   // clean the string from all non-alphanumeric chars
   str = str.match(/[a-zA-Z0-9]/g).join('');

   // make a copy from string and reverse it
   let copyStr = str.split('').reverse().join('');
   return str === copyStr;
}


console.log(palindrome("eye"))  //   true.
console.log(palindrome("_eye")) //   true.
console.log(palindrome("race car")) //   true.
console.log(palindrome("not a palindrome")) //   false.
console.log(palindrome("A man, a plan, a canal. Panama"))   //   true.
console.log(palindrome("never odd or even"))    //   true.
console.log(palindrome("nope"))     //   false.
console.log(palindrome("almostomla"))   //   false.
console.log(palindrome("My age is 0, 0 si ega ym."))    //   true.
console.log(palindrome("1 eye for of 1 eye."))  //   false.
console.log(palindrome("0_0 (: /-\ :) 0-0"))    //   true.
console.log(palindrome("five|\_/|four"))    //   false.
```



## 02) Roman Numeral Converter

Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

**convertToRoman(500)   should return "D"**\
**convertToRoman(501)   should return "DI"**\
**convertToRoman(649)   should return "DCXLIX"**\
**convertToRoman(798)   should return "DCCXCVIII"**\
**convertToRoman(891)   should return "DCCCXCI"**\
**convertToRoman(1000)   should return "M"**\
**convertToRoman(1004)   should return "MIV"**\
**convertToRoman(1006)   should return "MVI"**\
**convertToRoman(1023)   should return "MXXIII"**\
**convertToRoman(2014)   should return "MMXIV"**\
**convertToRoman(3999)   should return "MMMCMXCIX"**


```javascript
const convertToRoman = num => {

    // create Roman Numeral look up table
    const lookupTable = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    // create an accumulator
    let accumulator = '';

    // loop through lookup table
    for ( const key in lookupTable ) {
        const numberValue = lookupTable[key];
        
        // check if we have a match
        while( numberValue <= num ) {
            num -= numberValue;
            accumulator += key;
        }
    }
    return accumulator;
}


console.log(convertToRoman(500))    // "D"
console.log(convertToRoman(501))    // "DI"
console.log(convertToRoman(649))    // "DCXLIX"
console.log(convertToRoman(798))    // "DCCXCVIII"
console.log(convertToRoman(891))    // "DCCCXCI"
console.log(convertToRoman(1000))   // "M"
console.log(convertToRoman(1004))   // "MIV"
console.log(convertToRoman(1006))   // "MVI"
console.log(convertToRoman(1023))   // "MXXIII"
console.log(convertToRoman(2014))   // "MMXIV"
console.log(convertToRoman(3999))   // "MMMCMXCIX"
```