// Linked List
    // Insert
    // Delete
    // Search
    // Traverse / Reverse

class Node {
    constructor (value, next=null) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
    }

    add (value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node;
            this.tail = node
            return this;
        }
        this.tail.next = node; 
        this.tail = node;
        return this;
    }

    insertAt(value, position) {

    }

    deleteAt() {

    }
    
    print () {
        let current = this.head;
        while (current.next) {
            console.log(current.value)
            current = current.next
        }
        console.log(current.value)
    }
}

let LL = new LinkedList()
LL.add(1)
LL.add(2)
LL.add(3)
LL.add(4)
LL.print()