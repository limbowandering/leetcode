/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let current = Number.NEGATIVE_INFINITY
var isValidBST2 = function(root) {
  if (root == null) return true 
  if (isValidBST(root.left) && current < root.val) {
    current = root.val
    return isValidBST(root.right)
  }
  return false
};

var isValidBST = function(root) {
  if (root == null) return true
  let arr = []
  inOrderTraverse(root, arr)
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) return false
  }
  return true
}

var inOrderTraverse = function(node, arr) {
  if (node !== null) {
    inOrderTraverse(node.left, arr)
    arr.push(node.val)
    inOrderTraverse(node.right, arr)
  }
}

const testSample2 = {
  val: 5,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 4,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  }
}
const testSample = {
  val: 10,
  left: {
    val: 5,
    left: null,
    right: null
  },
  right: {
    val: 15,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 20,
      left: null,
      right: null
    }
  }
}
const testSample3 = {
  val: 1,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: null
}

const testSample4 = {
  val: 0,
  left: null,
  right: null
}

console.log(isValidBST(testSample))