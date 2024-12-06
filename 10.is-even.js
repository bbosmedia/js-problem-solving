/*

Even or Odd
Write a function isEven(num) that returns true if a given number is even and false if it’s odd.
Example: isEven(4) // returns true

*/

function isEven(n) {
	if (n === 0 || n === 1) {
		return false;
	}

	return n % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(0));
console.log(isEven(3));
console.log(isEven(4454));
