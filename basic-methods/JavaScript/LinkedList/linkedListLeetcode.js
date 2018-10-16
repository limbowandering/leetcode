//额 构造一个类 给LeetCode 刷题时候测试用
function LinkedList(){
    let Node = function(val){
        this.val = val;
        this.next = null;
    }

    let length = 0;
    let head = null;

    this.append = function(val){
        let node = new Node(val);
        let current;
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
    };

    this.insert = function(position, val){
        if(position >= 0 && position <= length){
            let node = new Node(val),
                current = head,
                previous,
                index = 0;

            if(position === 0){
                node.next = current;
                head = node;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        }else{
            return false;
        }
    };

    this.removeAt = function(position){
        if(position > -1 && position < length){
            let current = head,
                previous,
                index=0;
            if(position === 0){
                head = current.next;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.val;
        }else{
            return null;
        }
    }

    this.remove = function(val){
        let index = this.indexOf(val);
        return this.removeAt(index);
    };

    this.indexOf = function(val){
        let current = head,
            index = 0;
        while(current){
            if(val === current.val){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    this.isEmpty = function(){
        return length === 0;
    };
    this.size = function(){
        return length;
    };
    this.getHead = function(){
        return head;
    };
    this.toString = function(){
        let current = head,
            string = '';
        while(current){
            string += current.val + (current.next? ', ' : '');
            current = current.next;
        }
        return string;
    };
    this.print = function(){
        console.log(this.toString());
    }
}

//额 构造一个类 给LeetCode 刷题时候测试用
function LinkedList(){
    let Node = function(val){
        this.val = val;
        this.next = null;
    }

    let length = 0;
    let head = null;

    this.append = function(val){
        let node = new Node(val);
        let current;
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
    };

    this.insert = function(position, val){
        if(position >= 0 && position <= length){
            let node = new Node(val),
                current = head,
                previous,
                index = 0;

            if(position === 0){
                node.next = current;
                head = node;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        }else{
            return false;
        }
    };

    this.removeAt = function(position){
        if(position > -1 && position < length){
            let current = head,
                previous,
                index=0;
            if(position === 0){
                head = current.next;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.val;
        }else{
            return null;
        }
    }

    this.remove = function(val){
        let index = this.indexOf(val);
        return this.removeAt(index);
    };

    this.indexOf = function(val){
        let current = head,
            index = 0;
        while(current){
            if(val === current.val){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    this.isEmpty = function(){
        return length === 0;
    };
    this.size = function(){
        return length;
    };
    this.getHead = function(){
        return head;
    };
    this.toString = function(){
        let current = head,
            string = '';
        while(current){
            string += current.val + (current.next? ', ' : '');
            current = current.next;
        }
        return string;
    };
    this.print = function(){
        console.log(this.toString());
    }
}

module.exports = {
    LinkedList: LinkedList
}

//usage
const linkedList = require('../basic-methods/JavaScript/LinkedList/linkedListLeetcode');

let a = new linkedList.LinkedList();
a.append(1);
a.print();