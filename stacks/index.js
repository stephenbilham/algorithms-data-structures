/* Linked list */

// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }

// class Stack {
// 	constructor() {
// 		this.top = null;
// 		this.bottom = null;
// 		this.length = 0;
// 	}
// 	peek() {
// 		return this.top;
// 	}
// 	push(value) {
// 		const newNode = new Node(value);
// 		if (this.length === 0) {
// 			this.bottom = newNode;
// 			this.top = newNode;
// 		} else {
// 			const holdingPointer = this.top;
// 			this.top = newNode;
// 			this.top.next = holdingPointer;
// 		}
// 		this.length++;
// 		return this;
// 	}
// 	pop() {
// 		if (!this.top) {
// 			return null;
// 		}

// 		if (this.top === this.bottom) {
// 			this.bottom = null;
// 		}
// 		// const pointer = this.top;
// 		this.top = this.top.next;
// 		this.length--;
// 	}
// }

// const myStack = new Stack();
// myStack.push("google");
// myStack.push("reddit");
// myStack.push("discord");
// myStack.push("random");
// // console.log(myStack.peek());
// myStack.pop();
// myStack.pop();
// myStack.pop();
// myStack.pop();

// console.log(myStack);

// Array

class StackArray {
	constructor() {
		this.list = [];
	}
	peek() {
		return this.list[this.list.length - 1];
	}
	push(value) {
		this.list.push(value);
		return this;
	}
	pop() {
		this.list.pop();
		return this;
	}
}

const myStackArray = new StackArray();
myStackArray.push("google");
myStackArray.push("reddit");
console.log(myStackArray.peek());
myStackArray.pop();

console.log(myStackArray);
