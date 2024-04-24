function reverse(str) {
	if (!str || str.length < 2 || typeof str !== "string") {
		return "hmmm thats not good";
	}
	return str.split("").reverse().join("");
}

function reverse2(str) {
	if (!str || str.length < 2 || typeof str !== "string") {
		return "hmmm thats not good";
	}
	let backwards = [];
	for (let i = str.length - 1; i >= 0; i--) {
		backwards.push(str[i]);
	}
	return backwards.join("");
}

console.log(reverse("hello im steve"));
console.log(reverse2("hello im stephen"));
