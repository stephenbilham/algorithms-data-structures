/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// !!! this makes a new arr not what it was asking for
// var moveZeroes = function (nums) {
// 	let count = 0;
// 	let newArr = [];

// 	for (let num of nums) {
// 		if (num === 0) {
// 			count++;
// 		} else {
// 			newArr.push(num);
// 		}
// 	}

// 	while (count > 0) {
// 		newArr.push(0);
// 		count--;
// 	}
// 	return newArr;
// };

// var moveZeroes = function (nums) {
// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] === 0) {
// 			nums.splice(i, 1);
// 			nums.push(0);
// 		}
// 	}
// };

function moveZeroes(nums) {
	// pointer
	let index = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			nums[index] = nums[i];
			nums[i] = 0;
			index++;
		}
	}
	return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));

//  i
// [0, 1, 0, 3, 12]
/* not a non-zero dont swap move i*/

/* next iteration */

//     i
// [0, 1, 0, 3, 12]
/* swap*/
