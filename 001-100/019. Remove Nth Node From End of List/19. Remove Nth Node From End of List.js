function LinkedList() {

    let Node = function(element){

        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    this.append = function(element){

        let node = new Node(element),
            current;

        if (head === null){ //first node on list
            head = node;
        } else {

            current = head;

            //loop the list until find last item
            while(current.next){
                current = current.next;
            }

            //get last item and assign next to added item to make the link
            current.next = node;
        }

        length++; //update size of list
    };

    this.insert = function(position, element){

        //check for out-of-bounds values
        if (position >= 0 && position <= length){

            let node = new Node(element),
                current = head,
                previous,
                index = 0;

            if (position === 0){ //add on first position

                node.next = current;
                head = node;

            } else {
                while (index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }

            length++; //update size of list

            return true;

        } else {
            return false;
        }
    };

    this.removeAt = function(position){

        //check for out-of-bounds values
        if (position > -1 && position < length){

            let current = head,
                previous,
                index = 0;

            //removing first item
            if (position === 0){
                head = current.next;
            } else {

                while (index++ < position){

                    previous = current;
                    current = current.next;
                }

                //link previous with current's next - skip it to remove
                previous.next = current.next;
            }

            length--;

            return current.element;

        } else {
            return null;
        }
    };

    this.remove = function(element){

        let index = this.indexOf(element);
        return this.removeAt(index);
    };

    this.indexOf = function(element){

        let current = head,
            index = 0;

        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }

        return -1;
    };

    this.isEmpty = function() {
        return length === 0;
    };

    this.size = function() {
        return length;
    };

    this.getHead = function(){
        return head;
    };

    this.toString = function(){

        let current = head,
            string = '';

        while (current) {
            string += current.element + (current.next ? ', ' : '');
            current = current.next;
        }
        return string;

    };

    this.print = function(){
        console.log(this.toString());
    };
}


const removeNthFromEnd2 = function(head, n){
    let count = 1;
    let p = head;
    while(head.next !== null){
        if(count >= n){
            p = p.next;          
        }
        if(count < n){
            count++;
        }
        head = head.next;
    }
    p.element = p.next.element;
    p.next  = p.next.next;
};

const removeNthFromEnd = function(head, n){
    let p = head;
    let count = n;
    while(--count){
        head = head.next;
    }
    while(head.next !== null){
        head = head.next;
        p = p.next;
    }
    if(n === 1){
        p.element = null;
        p.next = null;
    }else{
        p.element = p.next.element;
        p.next = p.next.next;
    }
    return head;
}



let a = new LinkedList();
a.append(1);
a.append(2);
a.append(3);
a.append(4);
a.append(5);
a.print();

removeNthFromEnd(a.getHead(),2);
a.print();