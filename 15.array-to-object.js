/*

Array to Object
Write a function arrayToObject(arr) that converts an array of key-value pairs into an object.
Example: arrayToObject([["name", "Alice"], ["age", 25]]) // returns {name: "Alice", age: 25}

*/

function arrayToObject(items) {
	const obj = {};
	items.map(item => (obj[item[0]] = item[1]));
	return obj;
}

function arrayToObject2(items) {
	return items.reduce((result, item) => {
		const keyValue = item[0];
		const value = item[1];
		result[keyValue] = value;
		return result;
	}, {});
}

console.log(
	arrayToObject([
		['name', 'Alice'],
		['age', 25],
	])
);
console.log(
	arrayToObject2([
		['name', 'Alice'],
		['age', 25],
	])
);
