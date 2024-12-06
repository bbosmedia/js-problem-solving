/*

Square Array Elements
Write a function squareElements(arr) that returns a new array with the squares of each element in the given array.
Example: squareElements([1, 2, 3]) // returns [1, 4, 9]

*/

function squareElements(numList) {
	return numList.map(item => Math.pow(item, 2));
}

function squareElements2(numList) {
	return numList.map(item => item * item);
}

console.log(squareElements([1, 2, 3]));
