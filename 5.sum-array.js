/*

Sum of an Array
Write a function sumArray(arr) that takes an array of numbers and returns the sum of all numbers.
Example: sumArray([1, 2, 3, 4]) // returns 10

*/

function sumArray(listNumbers) {
	return listNumbers.reduce((sum, num) => sum + num, 0);
}

function sumArray2(listNumbers) {
	let sum = 0;

	if ((listNumbers.length = 0)) {
		sum = listNumbers[0];
	}

	if (listNumbers.length > 0) {
		listNumbers.forEach(num => {
			sum += num;
		});
	}

	return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([8, 2, 3, 4, 5]));
