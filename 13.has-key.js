/*

Check for Key in Object
Write a function hasKey(obj, key) that returns true if a given key exists in an object, otherwise false.
Example: hasKey({name: "Alice", age: 25}, "age") // returns true

*/

function hasKey(obj, key) {
	return obj.hasOwnProperty(key);
}

function hasKey2(obj, key) {
	return Object.keys(obj).includes(key);
}

function hasKey3(obj, key) {
	return new Set([...Object.keys(obj)]).has(key);
}

console.log(hasKey({ name: 'Alice', age: 25 }, 'age'));
console.log(hasKey({ name: 'Alice', age: 25 }, 'height'));
console.log(hasKey2({ name: 'Alice', age: 25 }, 'age'));
console.log(hasKey2({ name: 'Alice', age: 25 }, 'height'));
console.log(hasKey3({ name: 'Alice', age: 25 }, 'age'));
console.log(hasKey3({ name: 'Alice', age: 25 }, 'height'));
