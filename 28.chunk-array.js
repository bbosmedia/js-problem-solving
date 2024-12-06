/*

Chunk an Array
Write a function chunkArray(arr, size) that divides an array into subarrays, each of a specified length.
Example: chunkArray([1, 2, 3, 4, 5], 2) // returns [[1, 2], [3, 4], [5]]

*/

function chunkArray(arr, size) {
	const list = [];
	let small = [];

	arr.forEach((item, index) => {
		small.push(item);

		if (small.length === size || index === arr.length - 1) {
			list.push(small);
			small = [];
		}
	});

	return list;
}

function chunkArray2(arr, size) {
	return arr.reduce((list, item, index) => {
		const listIndex = Math.floor(index / size);

		if (list[listIndex]) {
			list[listIndex].push(item);
		} else {
			list[listIndex] = [];
			list[listIndex].push(item);
		}

		return list;
	}, []);
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));
console.log(chunkArray2([1, 2, 3, 4, 5, 6], 2));
