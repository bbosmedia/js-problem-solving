/*

Find the Longest Word
Create a function longestWord(sentence) that takes a sentence and returns the longest word.
Example: longestWord("I love programming") // returns "programming"

*/

function longestWord(sentence) {
	const listSentence = sentence.split(' ');
	let longestW = '';

	listSentence.forEach(str => {
		if (str.length >= longestW.length) {
			longestW = str;
		}
	});
	return longestW;
}

function longestWord2(sentence) {
	const listSentence = sentence.split(' ');

	const sorted = listSentence.sort((a, b) => b.length - a.length);
	return sorted[0];
}

console.log(longestWord2('I love tashkent'));
console.log(longestWord2('I love programming'));
