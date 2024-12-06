/*

Fibonacci Sequence
Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence.
Example: fibonacci(6) // returns 8

*/

function fibonacci(n) {
	if (n < 0) throw new Error('Input must be a non-negative integer.');
	if (n == 0) return 0;
	if (n <= 2) {
		return 1;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

function fibonacci2(n) {
	if (n < 0) throw new Error('Input must be a non-negative integer.');
	if (n === 0) return 0;
	if (n === 1) return 1;

	let prev = 0,
		curr = 1;

	for (let i = 2; i <= n; i++) {
		[prev, curr] = [curr, prev + curr];
	}

	return curr;
}

function fibonacci3(n, memo = {}) {
	if (n < 0) throw new Error('Input must be a non-negative integer.');
	if (n === 0) return 0;
	if (n === 1) return 1;

	if (memo[n]) return memo[n];

	memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

	return memo[n];
}
console.log(fibonacci(6));
console.log(fibonacci2(6));
console.log(fibonacci3(6));
