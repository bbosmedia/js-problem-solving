/*

Unique Characters
Write a function hasUniqueCharacters(str) that returns true if all characters in the string are unique, and false otherwise.
Example: hasUniqueCharacters("hello") // returns false

*/

function hasUniqueCharacters(str) {
	if (str.length === 0) {
		return false;
	}
	if (str.length === 1) {
		return true;
	}
	const list = str.split('');
	const unique = [...new Set(list)];

	return list.length === unique.length;
}

console.log(hasUniqueCharacters('hello'));
console.log(hasUniqueCharacters('Epam'));
