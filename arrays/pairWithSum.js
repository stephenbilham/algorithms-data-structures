// Naive
function hasPairWithSum(arr, sum) {
	// arr.length - 1 to avoid unncessary loops if it gets to the last element on the first iteration there is nothing to compare it too so filter it out (just do the inner elements)
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === sum) {
				return true;
			}
		}
	}
	return false;
}

// Better
// take sum and subtract the element from it this will give a number to find in the set that'll make the condition true
function hasPairWithSum2(arr, sum) {
	const mySet = new Set();
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		if (mySet.has(arr[i])) {
			return true;
		}
		mySet.add(sum - arr[i]);
		console.log(mySet);
	}
	return false;
}

// console.log(hasPairWithSum([6, 4, 3, 2, 1, 7], 9));
console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9));
