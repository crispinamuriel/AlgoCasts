// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//     const resultArr = [];
//     const strArr = str.split(' ');
//     strArr.forEach((word) => {
//         const firstLetter = word.slice(0, 1).toUpperCase();
//         word = firstLetter + word.slice(1);
//         resultArr.push(word);
//     });
//     return resultArr.join(' ');
// }

// function capitalize(str) {
//     const words = [];
//     const splitStr = str.split(' ');
//     splitStr.forEach((word) => {
//         const firstLetter = word[0].toUpperCase();
//         word = firstLetter + word.slice(1);
//         words.push(word);
//     })
//     return words.join(' ');
// }

// function capitalize(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         const el = str[i];
//         if (i === 0) {
//             result = result + el.toUpperCase();
//         }
//         if(el === ' ') {
//             result = result + ' ' + str[i + 1].toUpperCase();
//         } else if (i !== 0 && str[i-1] !== ' ') {
//             result = result + el;
//         }
//     }
//     return result;
// }

// function capitalize(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if (i === 0){
//             result += str[i].toUpperCase();
//         } else if (str[i-1] === ' ') {
//             result += str[i].toUpperCase();
//         } else {
//             result += str[i];
//         }
//     }
//     return result;
// }

function capitalize(str) {
    let result = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i-1] === ' '){
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}
capitalize('a short sentence')
module.exports = capitalize;
