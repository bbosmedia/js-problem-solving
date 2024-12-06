/*

Remove Duplicates
Write a function removeDuplicates(arr) that removes duplicate values from an array.
Example: removeDuplicates([1, 2, 3, 2, 1]) // returns [1, 2, 3]

*/

function removeDuplicates(list) {
	const uniqueItems = list.filter(
		(item, index) => list.indexOf(item) === index
	);
	return uniqueItems;
}

function removeDuplicates2(list) {
	const uniqueItems = [...new Set(list)];
	return uniqueItems;
}

function removeDuplicates3(list) {
	const uniqueItems = [];

	list.forEach(item => {
		if (uniqueItems.indexOf(item) === -1) {
			uniqueItems.push(item);
		}
	});
	return uniqueItems;
}
console.log(removeDuplicates([1, 2, 3, 2, 1]));
console.log(removeDuplicates2([1, 2, 3, 2, 1]));
console.log(removeDuplicates3([1, 2, 3, 2, 1]));
