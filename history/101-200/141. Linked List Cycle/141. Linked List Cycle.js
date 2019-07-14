/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 思路清奇 来自dooc/leetcode rookie
var hasCycle2 = function (head) {
  flag = false;

  dfs(head);

  return flag;
};
function dfs(node) {
  if (flag)
    return;

  if (node === null)
    return;

  if (node.flag) {
    flag = true;
    return;
  }

  if (node.next === null)
    return;

  node.flag = true;

  dfs(node.next);
}

var hasCycle = function(head) {
  let slow = head
  let fast = head
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      return true
    }
  }
  return false
}

var hasCycle3 = function(head) {
  let arr = []
  while (head !== null) {
    if (arr.includes(head)) {
      return true
    }
    arr.push(head)
    head = head.next
  }
  return false
}

const linkedList = require('../basic-methods/JavaScript/LinkedList/linkedListLeetcode');

let a = new linkedList.LinkedList();
a.append(3);
a.append(2);
a.append(0);
a.append(4);

console.log(hasCycle(a.getHead()))