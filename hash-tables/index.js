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
			this.data[hashedKey] = [key, val];
		}
	}
	get(key) {
		const hashedKey = this._hash(key);
		return this.data[hashedKey];
	}
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
console.log(myHashTable.get("grapes"));
myHashTable.set("apples", 9);
console.log(myHashTable.get("apples"));
