class Queue {
    constructor() {
        this.queue = []
    }
    enqueue(value) {
        this.queue.push(value);
        return this;
    }

    dequeue() {
        let value = this.peek();
        this.queue.splice(0, 1);
        return value;
    }
    peek() {
        return this.queue[0];
    }

    toString() {
        return this.queue;
    }
}

let Q = new Queue();
Q.enqueue(1)
Q.enqueue(2)
Q.enqueue(3)
Q.enqueue(4)

console.log(Q.peek())
console.log(Q.peek())

console.log(Q.toString())

Q.dequeue()
console.log(Q.toString())
console.log(Q.peek())
