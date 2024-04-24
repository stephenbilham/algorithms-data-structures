/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function (nums, target) {
// 	const map = {};

// 	for (let i = 0; i < nums.length; i++) {
// 		const num = nums[i];
// 		const compliment = target - num;

// 		if (map[compliment] !== undefined) {
// 			return [map[compliment], i];
// 		}

// 		map[num] = i;
// 	}
// };

var twoSum = function (nums, target) {
	const map = new Map();

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		let compliment = target - num;

		if (map.has(compliment)) {
			return [map.get(compliment), i];
		}
		map.set(num, i);
	}
};

console.log(twoSum([2, 7, 11, 15], 9));
