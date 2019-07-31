// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     return str === str.split('').reverse().join('');
// }

// function palindrome(str) {
//     if (str.length === 2 && str[0] === str[str.length - 1]) return true;
//     if (str.length === 1) return true;
//     return str[0] === str[str.length - 1] ? palindrome(str.slice(1, -1)) : false;
// }
//not an ideal solution because it does a dupliate check of each character. Once the characters up to the middle have been checked there is no reason to keep going past midpoint and re-checking the last half of the str. 
function palindrome(str) {
    return str.split('').every((char, i) => char === str[str.length - (i + 1)]);
}
console.log(palindrome('abba'));

module.exports = palindrome;
