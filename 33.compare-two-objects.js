/*

Compare Two Objects
Write a function areObjectsEqual(obj1, obj2) that checks if two objects are equal in terms of properties and values.
Example: areObjectsEqual({a: 1}, {a: 1}) // returns true

*/

function areObjectsEqual(obj1, obj2) {
	if (
		typeof obj1 !== 'object' ||
		typeof obj2 !== 'object' ||
		obj1 === null ||
		obj2 === null
	) {
		return false;
	}

	const obj1Keys = Object.keys(obj1);
	const obj2Keys = Object.keys(obj2);

	if (obj1Keys.length !== obj2Keys.length) {
		return false;
	}

	for (let key of obj1Keys) {
		const val1 = obj1[key];
		const val2 = obj2[key];

		const araObject = typeof val1 === 'object' && typeof val2 === 'object';

		if (
			(araObject && !areObjectsEqual(val1, val2)) ||
			(!araObject && val1 !== val2)
		) {
			return false;
		}
	}

	return true;
}

console.log(areObjectsEqual({ a: 1 }, { a: 1 }));
console.log(areObjectsEqual({ a: 1 }, { a: 2 }));

console.log(
	areObjectsEqual({ a: { b: { c: 1, b: 3 } } }, { a: { b: { c: 1, b: 2 } } })
);
