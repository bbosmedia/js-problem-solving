/*

Remove a Specific Element
Write a function removeElement(arr, element) that removes all occurrences of a specific element from an array.
Example: removeElement([1, 2, 3, 2, 4], 2) // returns [1, 3, 4]

*/

function removeElement(arr, el) {
	return arr.filter(item => item !== el);
}

function removeElement2(arr, el) {
	const list = [];

	arr.forEach(item => {
		if (item !== el) {
			list.push(item);
		}
	});

	return list;
}

console.log(removeElement([1, 2, 3, 2, 4], 2));
console.log(removeElement2([1, 2, 3, 2, 4], 2));
