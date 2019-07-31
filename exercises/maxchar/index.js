// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     let max = 0;
//     let char;
//     const count = {};
//     for (let char of str) {
//         if(count[char]) {
//             count[char]++;
//         } else {
//             count[char] = 1; 
//         }
//     }
//     for (let key in count) {
//         if(count[key] > max) {
//             max = count[key]
//         }
//     }
//     Object.keys(count).forEach((key) => {
//         if(count[key] === max) {
//             char = key
//         }
//     })
//     return char
// }

// function maxChar (str){
//     const chars = {};
//     let max = 0;
//     let maxchar;
//     for (let char of str) {
//         chars[char] = chars[char] + 1 || 1;
//     }
//     for (let char in chars) {
//         if (chars[char] > max) {
//             max = chars[char];
//             maxchar = char
//         }
//     }
//     return maxchar
// }

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';
    for(let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
   for(let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
   }
   return maxChar
}

console.log(maxChar('Hello There!'));


module.exports = maxChar;