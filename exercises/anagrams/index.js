/* eslint-disable complexity */
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     const filter = [' ', '.', ',', '?', '!', '`'];
//     stringA = stringA.toLowerCase();
//     stringB = stringB.toLowerCase();
//     const objA = {};
//     const objB = {};

//     for (let char of stringA) {
//         if(!filter.includes(char)) {
//             if(objA[char]){
//                 objA[char]++;
//             } else {
//                 objA[char] = 1;
//             }
//         }
//     }
//     for (let char of stringB) {
//         if (!filter.includes(char)) {
//             if (objB[char]) {
//                 objB[char]++;
//             } else {
//                 objB[char] = 1;
//             }
//         }
//     }
//     for (let char in objA) {
//         if(objA[char] !== objB[char]) {
//             return false;
//         }
//     }
//     for (let char in objB) {
//         if(objB[char] !== objA[char]) {
//             return false;
//         }
//     }
//     return true;
// }

// function anagrams(stringA, stringB) {
    // stringA = stringA.toLowerCase().replace(/[^\w]/g, '');
    // stringB = stringB.toLowerCase().replace(/[^\w]/g, '');
//     const objA = {};
//     const objB = {};

//     for (let char of stringA) {
//         if (objA[char]){
//             objA[char]++;
//         } else {
//             objA[char] = 1;
//         }
//     }

//     for (let char of stringB) {
//         if (objB[char]){
//             objB[char]++;
//         } else {
//             objB[char] = 1;
//         }
//     }

//     const keysObjA = Object.keys(objA);
//     const keysObjB = Object.keys(objB);
//
//     if (keysObjA.length === keysObjB.length && stringA.length === stringB.length) {
//         return true;
//     }
//     return false;
// }
//
// function anagrams(stringA, stringB) {
//     const mapA = charMap(stringA);
//     const mapB = charMap(stringB);
//     const keysMapA = Object.keys(mapA);
//     const keysMapB = Object.keys(mapB);

//     if (keysMapA.length === keysMapB.length && stringA.length === stringB.length) {
//         return true;
//     }
//     return false;
// }
////anagrams solution #1:
// function anagrams(stringA, stringB) {
//     const mapA = charMap(stringA);
//     const mapB = charMap(stringB);
//     const keysMapA = Object.keys(mapA);
//     const keysMapB = Object.keys(mapB);

//     if (keysMapA.length !== keysMapB.length) {
//         return false;
//     }
//     for (let key in mapA) {
//         if (mapA[key] !== mapB[key]) {
//             return false
//         }
//     }
//     return true;
// }

//create helper function to loop through and create a character map for a given string
// function charMap(str) {
//     const characterMap = {};
//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         characterMap[char] = characterMap[char] + 1 || 1;
//     }
//     return characterMap;
// }

//looping 1 time through string a, 1 time through string b, 1 time through object
//time complexity for isAnagram() is O(n)

//udemy solution #2: less performant
//using sort
function anagrams(strA, strB) {
    return cleanStr(strA) === cleanStr(strB);
}
function cleanStr(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

console.log(anagrams('Hi, Whoa!', 'Whoa, Hi!     !!!!!!'));

module.exports = anagrams;
