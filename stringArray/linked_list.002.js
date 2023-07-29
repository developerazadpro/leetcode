class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert at First Node
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++
    }

    // insert at Last Node
    insertLast(data){
        let node = new Node(data);
        let current;

        // if empty, make node
        if(!this.head){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++
    }


    // clear List
    clearList(){
        this.head = null;
        this.size = 0;
    }

    // print list Data
    printListData(){
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertFirst(300);
ll.insertFirst(200);
ll.insertFirst(100);
ll.insertLast(400);
ll.printListData();