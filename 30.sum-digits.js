/*

Sum of Digits
Write a function sumDigits(num) that calculates the sum of the digits in a given integer.
Example: sumDigits(123) // returns 6

*/

function sumDigits(num) {
	if (num < 10) {
		return num;
	}
	return String(num)
		.split('')
		.reduce((sum, n) => sum + Number(n), 0);
}

console.log(sumDigits(123));
console.log(sumDigits(456));
console.log(sumDigits(7));
console.log(sumDigits(78965552262626262));
