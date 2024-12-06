/*

Convert Object to Array
Write a function objectToArray(obj) that converts an object into an array of key-value pairs.
Example: objectToArray({a: 1, b: 2}) // returns [["a", 1], ["b", 2]]

*/

function objectToArray(obj) {
	const keys = Object.keys(obj);
	return keys.map(item => [item, obj[item]]);
}

console.log(objectToArray({ a: 1, b: 2 }));
