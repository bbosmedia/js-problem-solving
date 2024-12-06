/*

Find the Largest Number in an Array
Write a function maxNumber(arr) that returns the largest number in a given array.
Example: maxNumber([1, 5, 3, 9, 2]) // returns 9

*/

function largestNumber(numberList) {
	let largestN = 0;
	if (numberList.length === 0) {
		return 'List is empty';
	}

	if (numberList.length === 1) {
		largestN = numberList[0];
	}

	if (numberList.length > 1) {
		largestN = numberList[0];
		numberList.forEach(num => {
			if (num > largestN) {
				largestN = num;
			}
		});
	}

	return largestN;
}

function largestNumber2(numberList) {
	if (numberList.length === 0) {
		return 'List is empty';
	} else {
		return numberList.sort((a, b) => b - a)[0];
	}
}

console.log(largestNumber([1, 12, 34, 9]));
console.log(largestNumber([-17]));
console.log(largestNumber2([]));
console.log(largestNumber2([0, -17, 25]));
