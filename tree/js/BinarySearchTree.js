export class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // insert(newValue) {
  //   const newNode = new Node(newValue);
  //   if (this.root === null) {
  //     this.root = newNode;
  //     return this;
  //   } else {
  //     var curr = this.root;
  //     while (true) {
  //       if (newValue === curr.val) {
  //         return;
  //       }
  //       if (newValue < curr.val) {
  //         if (curr.left === null) {
  //           curr.left = newNode;
  //           return this;
  //         }
  //         curr = curr.left;
  //       } else {
  //         if (curr.right === null) {
  //           curr.right = newNode;
  //           return this;
  //         }
  //         curr = curr.right;
  //       }
  //     }
  //   }
  // }
  // insert(newValue) {
  //   if (this.root == null) {
  //     this.root = new Node(newValue);
  //     return;
  //   }
  //   //starting from the root

  //   var currentNode = this.root;
  //   var parent;
  //   //while we get to the null node
  //   while (currentNode) {
  //     parent = currentNode; //update the parent
  //     if (newValue < currentNode.val) {
  //       //if newValue < currentNode.val,
  //       //iterate to the left subtree
  //       currentNode = currentNode.leftChild;
  //     } else {
  //       //if newValue >= currentNode.val,
  //       //iterate to the right subtree
  //       currentNode = currentNode.rightChild;
  //     }
  //   }
  //   //by now, we will have the parent of the null
  //   //node where we have to insert the newValue
  //   if (newValue < parent.val) {
  //     //if newValue < parent.val
  //     //insert into the leftChild
  //     parent.leftChild = new Node(newValue);
  //   } else {
  //     //if newValue >= parent.val
  //     //insert into the rightChild
  //     parent.rightChild = new Node(newValue);
  //   }
  // }
  //   insert(currentNode, newValue) {
  //     if (currentNode === null) {
  //       currentNode = new Node(newValue);
  //     } else if (newValue < currentNode.val) {
  //       currentNode.leftChild = this.insert(currentNode.leftChild, newValue);
  //     } else {
  //       currentNode.rightChild = this.insert(currentNode.rightChild, newValue);
  //     }
  //     return currentNode;
  //   }
  //   insertR(newValue) {
  //     if (this.root == null) {
  //       this.root = new Node(newValue);
  //       return;
  //     }
  //     this.insert(this.root, newValue);
  //   }
  inOrderPrint(currentNode) {
    if (currentNode !== null) {
      this.inOrderPrint(currentNode.leftChild);
      console.log(currentNode.val);
      this.inOrderPrint(currentNode.rightChild);
    }
  }
  preOrderPrint(currentNode) {
    if (currentNode !== null) {
      console.log(currentNode.val);
      this.preOrderPrint(currentNode.leftChild);
      this.preOrderPrint(currentNode.rightChild);
    }
  }
  postOrderPrint(currentNode) {
    if (currentNode !== null) {
      this.postOrderPrint(currentNode.leftChild);
      this.postOrderPrint(currentNode.rightChild);
      console.log(currentNode.val);
    }
  }
  search(value) {
    var currentNode = this.root;
    while (currentNode && currentNode.val != value) {
      if (value < currentNode.val) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;
      }
    }
    return currentNode;
  }
  // search(currentNode, value) {
  //   if (currentNode !== null) {
  //     if (value == currentNode.val) {
  //       return currentNode;
  //     } else if (value < currentNode.val) {
  //       return this.search(currentNode.leftChild, value);
  //     } else {
  //       return this.search(currentNode.rightChild, value);
  //     }
  //   } else {
  //     return null;
  //   }
  // }

  // searchR(value) {
  //   return this.search(this.root, value);
  // }
  delete(currentNode, value) {
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
    } else if (
      currentNode.leftChild == null &&
      currentNode.rightChild == null
    ) {
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
}

// var BST = new BinarySearchTree(6);
// console.log("The root val for BST : ", BST.root.val);
// BST.insert(4);
// BST.insert(9);
// BST.insert(5);
// BST.insert(2);
// BST.insert(8);
// BST.insert(12);
// BST.insert(10);
// BST.insert(14);

// BST.inOrderPrint(BST.root);
