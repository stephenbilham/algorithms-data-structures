function findMaxSubarraySum(nums) {
	let currentSum = 0;
	let maxSum = [nums[0]];
	let arr = [];

	for (const num of nums) {
		currentSum = Math.max(num, currentSum + num);
		maxSum = Math.max(maxSum, currentSum);

		if (maxSum < currentSum) {
			arr.push(num);
		}
	}

	return arr;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(findMaxSubarraySum(nums));
