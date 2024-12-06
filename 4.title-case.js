/*

Title Case a Sentence
Write a function titleCase(sentence) that capitalizes the first letter of each word in a given sentence.
Example: titleCase("hello world") // returns "Hello World"

*/


function titleCase(str) {
	const list = str.split(' ');

	const converted = list.map(item => {
		if (item[0]) {
			const letters = item.split('');
			letters[0] = letters[0].toUpperCase();
			return letters.join('');
		}
		return item;
	});

	return converted.join(' ');
}

function titleCase2(sentence) {
	return sentence
		.split(' ')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

console.log(titleCase('hello world'));
console.log(titleCase2('hello world. abbos nurgulshanov'));
