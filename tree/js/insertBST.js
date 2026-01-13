export class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

export const insertBST = function (root, val) {
  const newNode = new Node(val);
  if (root === null) {
    return newNode;
  } else {
    var curr = root;
    while (true) {
      if (val === curr.val) {
        return root;
      }
      if (val < curr.val) {
        if (curr.left === null) {
          curr.left = newNode;
          return root;
        }
        curr = curr.left;
      } else {
        if (curr.right === null) {
          curr.right = newNode;
          return root;
        }
        curr = curr.right;
      }
    }
  }
};
