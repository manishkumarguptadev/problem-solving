
function findHeight(root) {
  if (root === null)
    // no node in BST
    return 0;
  else if (root.left === null && root.right === null)
    //Base case, leaf nodes have 0 height
    return 0;
  else {
    //Find Height of left subtree and then right subtree
    //Return greater height value of left or right subtree (plus 1)
    var leftHeight = findHeight(root.left);
    var rightHeight = findHeight(root.right);
    if (leftHeight > rightHeight) return leftHeight + 1;
    else return rightHeight + 1;
  }
}

