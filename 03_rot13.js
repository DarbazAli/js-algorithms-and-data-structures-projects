/* 
    Caesars Cipher
    One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

    A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

    Write a function which takes a ROT13 encoded string as input and returns a decoded string.

    All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on

    rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
    rot13("SERR CVMMN!") should decode to FREE PIZZA!
    rot13("SERR YBIR?") should decode to FREE LOVE?
    rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/

const rot13 = str => {
    // end result
    let decoded = '';

    // loop through the string
    for ( let i = 0; i < str.length; i++ ) {
        // get ASCII code of the current char
        let asciiNumb = str[i].charCodeAt();
        // a = 65, n = 77
        if ( asciiNumb >= 65 && asciiNumb <= 77 ) {
            // between a and n, move the char by 13 points
            decoded += String.fromCharCode(asciiNumb + 13);

        } else if ( asciiNumb >= 78 && asciiNumb <= 90 ) {
            // between n and z, move the char by -13 points
            decoded += String.fromCharCode( asciiNumb -13 );
        } else {
            // for non-alphanumerics, just add to the sring as it's
            decoded += str[i];
        }
    }
    
    return decoded;
}


console.log(rot13("SERR PBQR PNZC")) // FREE CODE CAMP
console.log(rot13("SERR CVMMN!")) // FREE PIZZA!
console.log(rot13("SERR YBIR?")) //FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")) // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
