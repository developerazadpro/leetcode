// -------------simple------------
// const n1 = {
//     data: 100
// }

// const n2 = {
//     data: 200
// }

// n1.next = n2;
// console.log(n1);

// --------------practical---------
class Node{
    constructor (data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor (){
        this.head = null;
        this.size = 0;
    }

    // insert First Node
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++
    }

    // insert Last Node
    insertLast(data){
        let node = new Node(data);
        let current;

        // if empty, make head
        if(!this.head){
            this.head = node;
        }else{
            current = this.head
            
            while(current.next){
                current = current.next;
            }

            current.next = node
        }
        this.size++

    }

    // insert at specific index

    // Get at index

    // Remove at index

    // clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }
    // print list
    printListData(){
        let current = this.head;
        
        while(current){
            console.log(current.data);
            current = current.next
        }
    }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);
ll.insertLast(500);
ll.printListData();