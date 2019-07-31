// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     if (n===0) return 0;
//     if (n > 0) {
//         return parseInt(n.toString().split('').reverse().join(''));
//     } else {
//         return -parseInt(n.toString().split('').reverse().join('').slice(0, -1));
//     }
// }

function reverseInt(n) {
    return Math.sign(n) * parseInt(n.toString().split('').reverse().join(''));
}

console.log(reverseInt(500));

module.exports = reverseInt;
