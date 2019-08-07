// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//     const vowels = 'aeiouAEIOU';
//     const vowelArray = vowels.split('');
//     let count = 0;
    
//     for (let char of str) {
//         if (vowelArray.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }
// function vowels(str) {
//     let count = 0;
//     for (let char of str) {
//         if (/^[aeiou]$/i.test(char)) {
//             count++;
//         }
//     }
//     return count;
// }
//udemy iterative solution
// function vowels(str) {
//     const filter = 'aeiou';
//     let count = 0;

//     for (let char of str.toLowerCase()) {
//         if(filter.includes(char)) {
//             count++
//         }
//     }
//     return count;
// }
//udemy regex solution
function vowels (str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(vowels('Hi There!'));
module.exports = vowels;
