// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//    const result = [];
//    while (array.length) {
//        result.push(array.splice(0, size));
//    }
//    return result;
// }
// function chunk(array, size) {
//     if (array.length === 0) return array;
//     return [array.splice(0, size)].concat(chunk(array, size));
// }
//udemy solution -
// function chunk (array, size) {
//     const chunked = [];
//     array.forEach((el) => {
//         let lastChunk = chunked[chunked.length-1];
//         if (!lastChunk || lastChunk.length === size) {
//             chunked.push([el]);
//         } else {
//             lastChunk.push(el);
//         }
//     });
//     return chunked;
// }
function chunk(array, size) {
    const result = [];
    let index = 0;
    while (index < array.length) {
        result.push(array.slice(index, index+size));
        index += size;
    }
    return result;
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));

module.exports = chunk;
