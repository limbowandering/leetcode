const linkedList = require('../basic-methods/JavaScript/LinkedList/linkedListLeetcode');

let a = new linkedList.LinkedList();
a.append(1);
a.append(3);
a.append(5);
a.print();

let b = new linkedList.LinkedList();
b.append(2);
b.append(3);
b.append(4);
b.print();

const mergeTwoLists2 = function(l1,l2){
    if(l1 === null && l2 === null){
        return null;
    }
    if(l1 !== null && l2 === null){
        return l1;
    }
    if(l1 === null && l2 !== null){
        return l2;
    }
    if(l1 !== null && l2 !== null){
        let t = null, h = null;
        if(l1.val > l2.val){
            t = l2;
            h = l2;
            l2 = l2.next;
        }else{
            t = l1;
            h = l1;
            l1 = l1.next;
        }
        while(l1 !== null && l2 !== null){
            if(l1.val > l2.val){
                t.next = l2;
                t = t.next;
                l2 = l2.next;
            }else{
                t.next = l1;
                t = t.next;
                l1 = l1.next;
            }
        }
        while(l1 !== null){
            t.next = l1;
            l1 = l1.next;
            t = t.next;
        }
        while(l2 !== null){
            t.next = l2;
            l2 = l2.next;
            t = t.next;
        }
        return h;
    }
}

const mergeTwoLists = function(l1,l2){
  if(l1 === null) return l2;
  if(l2 === null) return l1;
  if(l1.val < l2.val){
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }else{
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}

let c = mergeTwoLists(a.getHead(),b.getHead());

a.print();
b.print();
console.log(a.print2(c));