/*

Map Over Array of Objects
Write a function mapValues(arr, key) that returns an array of values from an array of objects, based on a specified key.
Example: mapValues([{a: 1}, {a: 2}], "a") // returns [1, 2]

*/

function mapValues(arr, key) {
	if (!Array.isArray(arr)) {
		return new Error('First element of function is not array');
	}
	return arr.map(item => item[key]);
}

function mapValues2(arr, key) {
	if (!Array.isArray(arr)) {
		return new Error('First element of function is not array');
	}

	const list = [];

	arr.forEach(item => {
		if (item[key]) {
			list.push(item[key]);
		}
	});
	return list;
}

console.log(mapValues([{ a: 1 }, { a: 2 }], 'a'));
console.log(mapValues2([{ a: 1 }, { a: 2 }], 'a'));
