/*

Deep Clone an Object
Write a function deepClone(obj) that creates a deep copy of a given object (not referencing nested objects).
Example: deepClone({a: {b: 1}}) // returns a completely separate copy

*/

function deepClone(obj) {
	if (obj === null || typeof obj !== 'object') {
		return obj;
	}

	if (Array.isArray(obj)) {
		return obj.map(deepClone);
	}

	let clonedObj = {};

	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			clonedObj[key] = deepClone(obj[key]);
		}
	}

	return clonedObj;
}

const original = { a: { b: 1 } };
const copy = deepClone(original);

console.log(copy);

console.log(copy === original);
