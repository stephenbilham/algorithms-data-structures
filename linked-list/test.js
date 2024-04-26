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
		// I was thinking why would we not update this.head.next but they point to the same place in memory
		//Update the next pointer of the current tail node to point to the new node
		this.tail.next = newNode;
		// Move the tail pointer to the newly added node
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value) {
		let newNode = new Node(value);

		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}
	printList() {
		const array = [];
		let currentNode = this.head;

		while (currentNode !== null) {
			currentNode.value;
			currentNode.next;
		}
		return array;
	}

	insert(value, index) {}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();

console.log("2324");

// console.log(myLinkedList.insert(99, 2));

// console.log(myLinkedList);
