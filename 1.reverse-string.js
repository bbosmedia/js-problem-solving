/* 

Reverse a String
Write a function reverseString(str) that takes a string as input and returns the reversed version of it.
Example: reverseString("hello") // returns "olleh"

*/

function reverseString(str) {
	const reversed = str.split('').reverse().join('');

	return reversed;
}

function reverseString2(str) {
	const reversedList = [];
	const splitted = str.split('');

	for (let i = splitted.length - 1; i >= 0; i--) {
		reversedList.push(splitted[i]);
	}

	return reversedList.join('');
}

function reverseString3(str) {
	let reversed = '';

	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str[i];
	}

	return reversed;
}

console.log(reverseString('Abbos'));
console.log(reverseString2('Hello'));
console.log(reverseString3('Epam'));
