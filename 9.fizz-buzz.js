/*

FizzBuzz
Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".

*/

function fizzBuzz(n) {
	if (n < 1) return Error('Number must be larger or equal to 1.');
	if (n % 3 == 0 && n % 5 === 0) {
		return 'FizzBuzz';
	}

	if (n % 3 === 0) {
		return 'Fizz';
	}
	if (n % 5 === 0) {
		return 'Buzz';
	}
	return n;
}


console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(7))
console.log(fizzBuzz(15))