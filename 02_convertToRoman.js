/* 
    Roman Numeral Converter

    Convert the given number into a roman numeral.
    All roman numerals answers should be provided in upper-case.

    convertToRoman(500) should return "D"
    convertToRoman(501) should return "DI"
    convertToRoman(649) should return "DCXLIX"
    convertToRoman(798) should return "DCCXCVIII"
    convertToRoman(891) should return "DCCCXCI"
    convertToRoman(1000) should return "M"
    convertToRoman(1004) should return "MIV"
    convertToRoman(1006) should return "MVI"
    convertToRoman(1023) should return "MXXIII"
    convertToRoman(2014) should return "MMXIV"
    convertToRoman(3999) should return "MMMCMXCIX"

*/


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