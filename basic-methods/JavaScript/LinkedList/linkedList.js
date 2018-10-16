function LinkedList(){
  let Node = function(element){
    this.element = element;
    this.next = null;
  };

  let length = 0;
  let head = null;

  this.append = function(element){
    let node = new Node(element),
      current;
    if(head === null){
      head = node;
    }else{
      current = head;

      while(current.next){
        current = current.next;
      }

      current.next = node;
    }
    length++;

  }
}

function DoublyLinkedList(){
  let Node = function(element){
    this.element = element;
    this.next = null;
    this.prev = null;
  };

  let length = 0;
  
}