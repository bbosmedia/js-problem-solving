/*

Anagram Check
Write a function isAnagram(str1, str2) to check if two strings are anagrams (contain the same characters in a different order).
Example: isAnagram("listen", "silent") // returns true

*/

function isAnagram(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}

	const sorted1 = str1.split('').sort().join();
	const sorted2 = str2.split('').sort().join();

	if (sorted1 === sorted2) {
		return true;
	}

	return false;
}



console.log(isAnagram('listen', 'silent'));

