/*

Group By Property
Write a function groupBy(arr, key) that groups an array of objects by a specified key.
Example: groupBy([{color: "red"}, {color: "blue"}, {color: "red"}], "color") // returns {red: [{color: "red"}, {color: "red"}], blue: [{color: "blue"}]}

*/

function groupBy(items, key) {
	return items.reduce((obj, item) => {
		if (obj[item[key]]) {
			obj[item[key]].push(item);
			return obj;
		} else {
			obj[item[key]] = [];
			obj[item[key]].push(item);
			return obj;
		}
	}, {});
}

function groupBy2(items, key) {
	let obj = {};

	items.forEach(item => {
		const objKey = item[key];
		if (obj[objKey]) {
			obj[objKey].push(item);
		} else {
			obj[objKey] = [];
			obj[objKey].push(item);
		}
	});
	return obj;
}

console.log(
	groupBy([{ color: 'red' }, { color: 'blue' }, { color: 'red' }], 'color')
);

console.log(
	groupBy2([{ color: 'red' }, { color: 'blue' }, { color: 'red' }], 'color')
);
