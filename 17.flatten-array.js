/*

Flatten a Nested Array
Write a function flattenArray(arr) that takes a nested array and returns a flat array.
Example: flattenArray([1, [2, [3, 4]], 5]) // returns [1, 2, 3, 4, 5]

*/

function flattenArray(array) {
	return array.flat(Infinity);
}

function flattenArray2(array) {
	return array.reduce((flat, item) => {
		return flat.concat(Array.isArray(item) ? flattenArray2(item) : item);
	}, []);
}

function flattenArray3(array) {
	let list = [];

	array.forEach(item => {
		if (Array.isArray(item)) {
			list = [...list, ...flattenArray3(item)];
		} else {
			list.push(item);
		}
	});

	return list;
}

function flattenArray4(array) {
	return array.reduce((flat, item) => {
		return Array.isArray(item) ? [...flat, ...flattenArray2(item)] : [...flat, item]
	}, []);
}

console.log(flattenArray([1, [2, [3, 4]], 5]));
console.log(flattenArray2([1, [2, [3, 4]], 5]));
console.log(flattenArray3([1, [2, [3, 4]], 5]));
console.log(flattenArray4([1, [2, [3, 4]], 5]));
