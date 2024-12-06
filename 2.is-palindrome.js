/*

Palindrome Check
Write a function isPalindrome(str) to check if a given string is a palindrome (reads the same forwards and backwards).
Example: isPalindrome("madam") // returns true

*/

function isPalindrome(str) {
	const reversed = str.split('').reverse().join('');

	if (reversed === str) {
		return true;
	}

	return false;
}

function isPalindrome2(str) {
	let reversed = '';

	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str[i];
	}

	if (reversed === str) {
		return true;
	}

	return false;
}

console.log(isPalindrome('mama'));
console.log(isPalindrome2('mamam'));
