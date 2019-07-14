const linkedList = require('../basic-methods/JavaScript/LinkedList/linkedListLeetcode');

const reverseList = function(head){
    if(head == null){
        return head;
    }
    let cur = head;
    let pre = null, tmp = null;
    while(cur != null){
        tmp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tmp;
    }
    return pre;
}

let a = new linkedList.LinkedList();
for(let i = 0 ; i < 3; i++){
    a.append(i);
}
a.print();
let b = reverseList(a.getHead());
console.log(a.print2(b));