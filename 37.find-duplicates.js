/*

Find Duplicates in an Array
Write a function findDuplicates(arr) that finds duplicate values in an array.
Example: findDuplicates([1, 2, 2, 3, 4, 4]) // returns [2, 4]

*/

function findDuplicates(arr) {
	const unique = [...new Set(arr)];

	return unique.filter(item => arr.filter(a => a === item).length > 1);
}

function findDuplicates2(arr) {
	const counts = {};
	const list = [];

	for (let item of arr) {
		if (item) {
			counts[item] = (counts[item] || 0) + 1;
		}
	}

	for (let key in counts) {
		if (counts[key] > 1) {
			list.push(Number(key));
		}
	}

	return list;
}

console.log(findDuplicates([1, 2, 2, 3, 4, 4]));
console.log(findDuplicates([1, 2, 3]));

console.log(findDuplicates2([1, 2, 2, 3, 4, 4]));
console.log(findDuplicates2([1, 2, 3]));
