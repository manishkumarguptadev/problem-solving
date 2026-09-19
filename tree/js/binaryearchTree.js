class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

var insert = function (root, val) {
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

function preOrderPrint(currentNode) {
  if (currentNode !== null) {
    console.log(currentNode.val);
    preOrderPrint(currentNode.left);
    preOrderPrint(currentNode.right);
  }
}
function postOrderPrint(currentNode) {
  if (currentNode !== null) {
    postOrderPrint(currentNode.left);
    postOrderPrint(currentNode.right);
    console.log(currentNode.val);
  }
}

function deleteNode(currentNode, value) {
  if (currentNode == null) {
    return false;
  }

  var parentNode;
  while (currentNode && currentNode.val != value) {
    parentNode = currentNode;
    if (value < currentNode.val) {
      currentNode = currentNode.leftChild;
    } else {
      currentNode = currentNode.rightChild;
    }
  }

  if (currentNode === null) {
    return false;
  } else if (currentNode.leftChild == null && currentNode.rightChild == null) {
    if (currentNode.val == this.root.val) {
      this.root = null;
      return true;
    } else if (currentNode.val < parentNode.val) {
      parentNode.leftChild = null;
      return true;
    } else {
      parentNode.rightChild = null;
      return true;
    }
  } else if (currentNode.rightChild == null) {
    if (currentNode.val == this.root.val) {
      this.root = currentNode.leftChild;
      return true;
    } else if (currentNode.leftChild.val < parentNode.val) {
      parentNode.leftChild = currentNode.leftChild;
      return true;
    } else {
      parentNode.rightChild = currentNode.leftChild;
      return true;
    }
  } else if (currentNode.leftChild == null) {
    if (currentNode.val == this.root.val) {
      this.root = currentNode.rightChild;
      return true;
    } else if (currentNode.rightChild.val < parentNode.val) {
      parentNode.leftChild = currentNode.rightChild;
      return true;
    } else {
      parentNode.rightChild = currentNode.rightChild;
      return true;
    }
  } else {
    var minRight = currentNode.rightChild;
    while (minRight.leftChild !== null) {
      minRight = minRight.leftChild;
    }
    var temp = minRight.val;
    this.delete(this.root, minRight.val);
    currentNode.val = temp;
    return true;
  }
}
function findMin(root) {
  if (root == null) {
    return null;
  }
  let curr = root;
  while (curr.left !== null) {
    curr = curr.left;
  }

  return curr.val;
}
function findMinR(root) {
  if (root == null) {
    return null;
  } else if (root.left == null) {
    return rooe.val;
  } else {
    return findMin(root.left);
  }
}
let root = null;
root = insert(root, 4);
insert(root, 9);
insert(root, 5);
insert(root, 2);
insert(root, 8);
insert(root, 12);
insert(root, 10);
insert(root, 14);
// inOrderPrint(root);
console.log(findMinR(root));
