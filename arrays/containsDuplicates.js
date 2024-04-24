/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	const map = {};

	for (let num of nums) {
		if (map[num]) {
			return true;
		}
		map[num] = num;
	}
	return false;
};
