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
		(this.value = value), (this.next = null), (this.prev = null);
	}
}

class DoublyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: {},
			prev: null,
		};
		// pointer
		this.tail = this.head;
		this.length = 1;
	}
	append(value) {
		const newNode = new Node(value);
		newNode.prev = this.tail; // change
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head.prev = newNode;
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
		const follower = leader.next;
		leader.next = newNode;
		newNode.prev = leader;
		newNode.next = follower;
		follower.prev = newNode;

		this.length++;
		return this.printList();
	}

	remove(index) {
		const leader = this.traverse(index - 1);
		const unwantedNode = leader.next;
		leader.next = unwantedNode.next;
		leader.next.prev = leader;
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
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.insert(99, 2));
console.log(myLinkedList.remove(2));
console.log(myLinkedList);
