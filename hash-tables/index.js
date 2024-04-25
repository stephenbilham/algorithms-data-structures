class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	set(key, val) {
		const hashedKey = this._hash(key);
		if (!this.data[hashedKey]) {
			this.data[hashedKey] = [];
		}

		this.data[hashedKey].push([key, val]);
		return this.data;
	}

	get(key) {
		const hashedKey = this._hash(key);
		const currentBucket = this.data[hashedKey];

		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] == key) {
					return currentBucket[i][1];
				}
			}
		} else {
			return undefined;
		}
	}
	keys() {
		const keysArray = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				keysArray.push(this.data[i][0][0]);
			}
		}
		return keysArray;
	}
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 9);
console.log(myHashTable.get("grapes"));
console.log(myHashTable.get("apples"));
console.log(myHashTable.keys());
