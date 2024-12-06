/*

Rotate Array
Write a function rotateArray(arr, steps) that rotates an array by a given number of steps to the right.
Example: rotateArray([1, 2, 3, 4], 2) // returns [3, 4, 1, 2]

*/

function rotateArray(arr, steps) {
	const len = arr.length;

	if (len === 0 || len === steps) return arr;

	const rotation = steps % len;

	return arr.slice(-rotation).concat(arr.slice(0, -rotation));
}

function rotateArray2(arr, steps) {
	const len = arr.length;

	if (len === 0 || len === steps) return arr;

	const rotation = steps % len;

	return [...arr.slice(-rotation), ...arr.slice(0, -rotation)];
}

console.log(rotateArray([1, 2, 3, 4], 5));
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

console.log(rotateArray2([1, 2, 3, 4], 5));
console.log(rotateArray2([1, 2, 3, 4, 5, 6, 7], 3));
