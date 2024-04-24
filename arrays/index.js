class Player {
	constructor(name, type) {
		(this.name = name), (this.type = type);
	}
	greeting() {
		return `hello my name is ${this.name} and I am a ${this.type} Player`;
	}
}

// console.log(player1.greeting());

class Wizard extends Player {
	constructor(name, type) {
		super(name, type);
	}
	play() {
		return `hello my name is ${this.name} and I am a ${this.type} Wizard`;
	}
}

const wizard1 = new Wizard("steve", "dark magic");
console.log(wizard1.play());
console.log(wizard1.greeting());

class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}
	get(index) {
		return this.data[index];
	}
	push(item) {
		this.data[this.length] = item;
		this.length++;
	}
	pop() {
		delete this.data[this.length - 1];
		this.length--;
		return this.data;
	}
	delete(index) {
		const item = this.data[index];
		this.shiftItems(index);
		return this.data;
	}
	shiftItems(index) {
		for (let i = index; i < this.length - 1; i++) {
			console.log(this.data[i]);
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
	}
}

const arr = new MyArray();
arr.push("hi");
arr.push("you");
arr.push("!");
arr.delete(1);
console.log(arr);
