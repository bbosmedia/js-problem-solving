/*

Find Intersection of Two Arrays
Write a function findIntersection(arr1, arr2) that returns an array of elements that are present in both input arrays.
Example: findIntersection([1, 2, 3], [2, 3, 4]) // returns [2, 3]

*/

function findIntersection(arr1, arr2) {
	if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
		return new Error('Items must be array');
	}
	const list = arr1.filter(item => arr2.includes(item));

	return list;
}


function findIntersection2(arr1, arr2) {
	const obj = new Set(arr2)
	if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
		return new Error('Items must be array');
	}
	const list = arr1.filter(item => obj.has(item));

	return list;
}

console.log(findIntersection([1, 2, 3], [2, 3, 4]));
console.log(findIntersection2([1, 2, 3], [2, 3, 4]));
