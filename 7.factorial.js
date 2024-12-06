/*

Factorial Calculation
Create a function factorial(num) that calculates the factorial of a given number (n!).
Example: factorial(5) // returns 120

*/

function factorial(n) {
	if (n < 0) {
		return 'Number should be larger positive';
	}
	if (n == 0 || n === 1) {
		return 1;
	}

	return n * factorial(n - 1);
}

function factorial2(n) {
	let numList = [];

	if (n < 0) {
		return 'Number should be larger positive';
	}
	if (n == 0 || n === 1) {
		return 1;
	}
	for (i = 1; i <= n; i++) {
		numList.push(i);
	}

	return numList.reduce((m, a) => m * a, 1);
}

console.log(factorial(5));
console.log(factorial2(3));
