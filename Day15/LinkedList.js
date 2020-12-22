class LinkedList {
    constructor(current) {
        this.HEAD = current;
        this.TAIL = current; 
        this.current = current;
    }

    insertEnd(item) {
        this.TAIL.next = item;
        item.prev = this.TAIL
        this.TAIL = item;
    }

    insertStart(item) {
        
    }



    test() {
        this.curre
    }

}