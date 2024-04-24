interface Item {
	id: string;
	tag: string;
}
interface ItemStore {
	put: (item: Item) => void;
	get: (id: string) => Item | null;
	dropAllByTag: (tag: string) => void;
	size: () => number;
}

class MapItemStore implements ItemStore {
	private items: Map<string, Item>;

	constructor() {
		this.items = new Map<string, Item>();
	}

	put(item: Item) {
		this.items.set(item.id, item);
	}

	get(id: string): Item | null {
		return this.items.get(id) || null;
	}

	dropAllByTag(tag: string): void {
		this.items.forEach((item) => {
			if (item.tag === tag) {
				this.items.delete(item.id);
			}
		});
	}

	size(): number {
		return this.items.size;
	}
}

// Testing the class
const store = new MapItemStore();
store.put({ id: "1", tag: "A" });
store.put({ id: "2", tag: "B" });
store.put({ id: "3", tag: "A" });
store.put({ id: "4", tag: "C" });

console.log("Size:", store.size()); // Size: 4

console.log("Item with id '2':", store.get("2")); // { id: '2', tag: 'B' }

store.dropAllByTag("A");
console.log("Size after dropping items with tag 'A':", store.size()); // Output: Size after dropping items will be 2
