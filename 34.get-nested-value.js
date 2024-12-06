/*

Nested Object Value Retrieval
Write a function getNestedValue(obj, path) that retrieves a value from a nested object based on a dot-separated path.
Example: getNestedValue({a: {b: {c: 3}}}, "a.b.c") // returns 3

*/

function getNestedValue(obj, path) {
	const keys = path.split('.');
	let item = obj;

	for (let key of keys) {
		if (item[key]) {
			item = item[key];
		} else {
			return undefined;
		}
	}

	return item;
}

function getNestedValue2(obj, path) {
	return path.split('.').reduce((item, key) => {
		return item && item[key] !== undefined ? item[key] : undefined;
	}, obj);
}

console.log(getNestedValue({ a: { b: { c: 3 } } }, 'a.b.c'));
console.log(
	getNestedValue({ a: { b: { c: { abbos: 'Hello' } } } }, 'a.b.c.d')
);

console.log(getNestedValue2({ a: { b: { c: 3 } } }, 'a.b.d'));
console.log(
	getNestedValue2({ a: { b: { c: { abbos: 'Hello' } } } }, 'a.b.c.abbos')
);
