const linkedList = require('../basic-methods/JavaScript/LinkedList/linkedListLeetcode');

//写错了 明天在更新
const reverseList = function(head){
    let pre = head;
    let cur = head.next;
    let tmp;
    while(cur!==null){
        tmp = cur.next;
        cur.next = pre;
        pre = pre.next;
        cur = tmp;
    }
    return pre;
}

let a = new linkedList.LinkedList();
for(let i = 0 ; i < 3; i++){
    a.append(i);
}
a.print();
reverseList(a.getHead());
a.print();