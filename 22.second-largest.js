/*

Find Second Largest Number
Create a function secondLargest(arr) that returns the second-largest number in an array.
Example: secondLargest([1, 3, 4, 5]) // returns 4

*/

function secondLargest(list) {
	return list.sort((a, b) => b - a)[1];
}

function secondLargest2(list) {
	if (list.length === 1) {
		return list[0];
	}

	if (list.length === 0) {
		return 0;
	}

	let curr = list[0],
		prev = list[0] - 1;

	list.forEach(item => {
		if (item > curr) {
			prev = curr;
			curr = item;
		}
	});
	return prev;
}

console.log(secondLargest([1, 3, 4, 5]));
console.log(secondLargest2([1, 3, 4, 5]));
