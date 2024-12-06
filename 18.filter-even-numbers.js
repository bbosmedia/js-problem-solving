/*

Filter Even Numbers
Write a function filterEven(arr) that filters out all even numbers from an array.
Example: filterEven([1, 2, 3, 4, 5]) // returns [2, 4]

*/

function filterEven(numList) {
	const list = numList.filter(a => a % 2 === 0);
	return list;
}

function filterEven2(numList) {
	const list = [];

	numList.forEach(item => {
		if (item % 2 === 0) {
			list.push(item);
		}
	});
	return list;
}

console.log(filterEven([1, 2, 3, 4, 5]));
console.log(filterEven2([1, 2, 3, 4, 5]));
