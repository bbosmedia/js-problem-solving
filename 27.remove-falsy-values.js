/*

Remove Falsy Values
Write a function removeFalsy(arr) that removes all falsy values (like 0, "", null, undefined, false) from an array.
Example: removeFalsy([0, 1, false, 2, "", 3]) // returns [1, 2, 3]

*/

function removeFalsy(arr) {
	return arr.filter(item => {
		if (item) {
			return item;
		}
	});
}

console.log(removeFalsy([0, 1, false, 2, '', 3]));
