// 10 --> 5 --> 16
// const myLinkedList = {
// 	head: {
// 		value: 10,
// 		next: {
// 			value: 5,
// 			next: null,
// 		},
// 	},
// };

class Node {
	constructor(value) {
		(this.value = value), (this.next = null);
	}
}

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: {},
		};
		// pointer
		this.tail = this.head;
		this.length = 1;
	}
	append(value) {
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}
	printList() {
		const array = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}
	insert(value, index) {
		if (index >= this.length) {
			this.append(value);
		}

		const newNode = new Node(value);
		const leader = this.traverse(index - 1);
		const holdingPointer = leader.next;
		leader.next = newNode;
		newNode.next = holdingPointer;
		this.length++;
		return this.printList();
	}

	remove(index) {
		const leader = this.traverse(index - 1);
		const unwantedNode = leader.next;
		leader.next = unwantedNode.next;
		this.length--;
		return this.printList();
	}

	traverse(index) {
		let start = 0;
		let currentNode = this.head;

		while (start !== index) {
			currentNode = currentNode.next;
			start++;
		}
		return currentNode;
	}

	// this was confusing due to so many moving parts
	reverse() {
		if (!this.head.next) {
			return this.head;
		}

		// 1
		let first = this.head;
		// 1 --> 16
		this.tail = this.head;
		// 5
		let second = first.next;

		while (second) {
			// 10
			const temp = second.next;
			// second var points to first (1)
			second.next = first;
			// 10 --> 1
			first = second;
			// second --> 5
			second = temp;
		}

		this.head.next = null;
		// by the time it loops it becomes 16
		this.head = first;

		return this;
	}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// console.log(myLinkedList.insert(99, 2));
// console.log(myLinkedList.remove(2));
// console.log(myLinkedList);
console.log(myLinkedList.reverse());
