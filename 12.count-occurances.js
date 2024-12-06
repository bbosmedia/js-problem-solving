/*

Count Occurrences in an Array
Write a function countOccurrences(arr, value) that counts the number of times value appears in arr.
Example: countOccurrences([1, 2, 3, 2, 1, 2], 2) // returns 3

*/

function countOccurrences(numList, num) {
	if (numList.length === 0) return 0;

	return numList.filter(item => item === num).length;
}

function countOccurrences2(numList, num) {
	let count = 0;
	if (numList.length === 0) return 0;

	numList.forEach(element => {
		if(element === 2){
			count++;
		}
	});

	return count
}

console.log(countOccurrences([1, 2, 3, 2, 1, 2], 2))
console.log(countOccurrences([1, 2, 4, 4, 1, 4], 2))

console.log(countOccurrences2([1, 2, 3, 2, 1, 2], 2))
console.log(countOccurrences2([1, 2, 4, 4, 1, 4], 2))
