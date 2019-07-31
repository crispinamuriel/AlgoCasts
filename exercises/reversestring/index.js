// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     const strArr = str.split('');
//     if(str.length < 2) {
//         return str
//     }
//     const reversed = strArr.reverse().join('')
//     return reversed

// }

// function reverse(str) {
//     let result = '';
//     if (str.length < 2) {
//         return str
//     }
//     for(let i = str.length-1; i >= 0; i--) {
//         result += str[i];
//     }
//     return result
// }
// reverse('hello');

// function reverse(str) {
//     if (str.length < 2) {
//         return str
//     } else {
//         return str[str.length - 1] + reverse(str.slice(0, -1));
//     }

// }

//for-of looping syntax es6 es2015
function reverse(str) {
    let reversed = '';
    for (let char of str) {
       reversed = char + reversed;
    }
    return reversed
}


// function reverse(str) {
//     debugger;
//     return str.split('').reduce((reversed, char) =>  char + reversed, '');
// }
// reverse('hello')

module.exports = reverse;
