// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     for(let i = 1; i <= n; i++) {
//         if(i === n) {
//             let step = ''
//             let count = n;
//             while (count){
//                 step += '#';
//                 count--;
//             }
//             console.log(step);
//         } else {
//             let step = '';
//             let count = i;
//             let count2 = n - i;
//             while (count) {
//                 step += '#';
//                 count--;
//             }
//             while (count2) {
//                 step += ' ';
//                 count2--; 
//             }
//             console.log(step);
//         }
//     }
// }
//psuedo code solution

// function steps(n) {
//     for (let i = 0; i < n; i++) {
//         let stair = '';
//         for (let j = 0; j < n; j++) {
//             if (j <= i) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//         console.log(stair);
//     }
// }
//solution
/* 
from 0 to n (iterate through rows)
    create an empty string, 'stair'
    from 0 to n (iterate through columns)
        if the current column is equal to or less than the current row
            add a '#' to 'stair'
        else
            add a space to 'stair'
    console.log(stair);
*/
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = '';
//         for (let column = 0; column < n; column++) {
//             if(column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' '
//             }
//         }
//         console.log(stair);
//     }
// }
//recursion tutorial
// function printNumber(num) {
//     if (num === 0) {
//         return;
//     } else {
//         console.log(num);
//         printNumber(num - 1);
//     }
// }
// printNumber(5)
/* Recursion Tips
1. Figure out the bare minimum pieces of information to represent your problem
2. Give reasonable defaults to the bare minimum pieces of info
3. Check the base case. Is there any work left to do? If not, return.
4. Do some work. Call your function again, making sure the arguments have changed in some fashion. */
//steps function pseudo code
/* 1) if (row === n) then we have hit the end of our problem
2) if the 'stair' string has a length === n then we are at the end of a row
3) if the length of stair string is less than or equal to the row number we're working on, we add a '#', otherwise add a space.*/
//recursive solution
function steps(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }
    if (stair.length === n) {
        console.log(stair);
        return steps(n, row + 1);
    }
    // stair.length <= row ? stair += '#' : stair += ' ';
    const add = stair.length <= row ? '#' : ' ';

    steps(n, row, stair + add); //when we call this function here we're passing in all info needed to finish the problem
}
steps(3)

module.exports = steps;
