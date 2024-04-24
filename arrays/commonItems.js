const array1 = ["a", "b", "c", "d"];
const array2 = ["e", "f", "y", "h"];

const commonItems1 = (array1, array2) => {
	for (let i = 0; i < array1.length; i++) {
		for (let j = 0; j < array2.length; j++) {
			if (array1[i] === array2[j]) {
				return true;
			}
		}
	}
	return false;
};

//O(a*b)
//O(1) - Space Complexity

const commonItems2 = (array1, array2) => {
	const map = {};

	array1.forEach((el) => {
		if (map[el] !== el) {
			map[el] = true;
		}
	});

	for (let el of array2) {
		if (map[el]) {
			return true;
		}
	}

	return false;
};

//O(a + b) Time Complexity
//O(a) Space Complexity

const commonItems3 = (array1, array2) => {
	return array1.some((item) => array2.includes(item));
};

console.log(commonItems1(array1, array2), "> solution 1");
console.log(commonItems2(array1, array2), "> solution 1");
console.log(commonItems3(array1, array2), "> solution 1");
