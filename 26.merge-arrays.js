/*

Merge Two Sorted Arrays
Write a function mergeSortedArrays(arr1, arr2) that merges two sorted arrays into one sorted array.
Example: mergeSortedArrays([1, 3, 5], [2, 4, 6]) // returns [1, 2, 3, 4, 5, 6]

*/

function mergeSortedArrays(arr1, arr2) {
	return [...arr1, ...arr2].sort();
}


function mergeSortedArrays2(arr1, arr2) {
	arr2.forEach((item)=>arr1.push(item))
	return arr1.sort()
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
console.log(mergeSortedArrays2([1, 3, 5], [2, 4, 6]));
