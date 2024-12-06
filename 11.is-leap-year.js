/*

Leap Year Check
Write a function isLeapYear(year) that checks if a given year is a leap year.
Example: isLeapYear(2020) // returns true

*/

function isLeapYear(year) {
	if (year <= 0)
		return Error('Year number must be positive and greater than 0');
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function isLeapYear2(year) {
	if (year <= 0)
		return Error('Year number must be positive and greater than 0');
	if (year % 4 === 0 && year % 100 !== 0) {
		return true;
	}

	if (year % 400 === 0) {
		return true;
	}

	return false;
}

console.log(isLeapYear(1700));
console.log(isLeapYear(2020));
console.log(isLeapYear2(100));
console.log(isLeapYear(1));
