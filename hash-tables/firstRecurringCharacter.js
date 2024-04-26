// brute

function firstRecurringCharacter(input) {
	for (let i = 0; i < input.length; i++) {
		for (let j = i + 1; j < input.length; j++) {
			if (input[i] == input[j]) {
				return input[j];
			}
		}
	}
	return undefined;
}

// function firstRecurringCharacter(input) {
// 	const hashMap = {};

// 	for (let num of input) {
// 		if (hashMap[num]) {
// 			return num;
// 		}
// 		hashMap[num] = num;
// 	}
// 	return undefined;
// }

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
//It should return 1

//Given an array = [2,3,4,5]:
console.log(firstRecurringCharacter([2, 3, 4, 5]));

//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
// return 5 because the pairs are before 2,2
