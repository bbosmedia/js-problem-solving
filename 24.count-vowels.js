/*

Count Vowels in a String
Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a string.
Example: countVowels("hello") // returns 2

*/

function countVowels(text) {
	const vowelLetters = ['a', 'e', 'i', 'o', 'u'];
	if (text.length === 0) {
		return 0;
	}
	return text.split('').filter(item => vowelLetters.includes(item)).length;
}

function countVowels2(text) {
	const vowelLetters = ['a', 'e', 'i', 'o', 'u'];
	let count = 0;

	if (text.length === 0) {
		return 0;
	}

	text.split('').forEach(item => {
		if (vowelLetters.includes(item)) {
			count++;
		}
	});

	return count;
}

console.log(countVowels('hello'));
console.log(countVowels2('abbos'));
console.log(countVowels2('Nurlanbek'));
