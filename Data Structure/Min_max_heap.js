class node {
    constructor (parent = null) {
        this.parent = parent;
        this.child = []
    }
}
class Heap {
    constructor(min = true) {
        this.root = null;
    }
}