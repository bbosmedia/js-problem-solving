/*

Get Unique Values by Key
Write a function getUniqueValues(arr, key) that extracts unique values from an array of objects by a specific key.
Example: getUniqueValues([{a: 1}, {a: 2}, {a: 1}], 'a') // returns [1, 2]

*/

function getUniqueValues(arr, key) {
	return [...new Set(arr.map(item => item[key]))];
}

function getUniqueValues2(arr, key) {
	const unique = [];
	arr.forEach(item => {
		if (item[key] && !unique.includes(item[key])) {
			unique.push(item[key]);
		}
	});
	return unique;
}

console.log(getUniqueValues([{ a: 1 }, { a: 2 }, { a: 1 }], 'a'));
console.log(getUniqueValues2([{ a: 1 }, { a: 2 }, { a: 1 }], 'a'));
