let leader = this.traverse(index - 1);
const unwantedNode = leader.next;
leader.next = unwantedNode.next;
this.length--;
return this.printList();
