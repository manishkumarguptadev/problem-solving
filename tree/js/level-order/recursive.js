// Compute the maximum height of a tree
let getMaxHeight = function (node) {
  if (node == null) {
    return 0;
  } else {
    const leftHeight = getMaxHeight(node.left);
    const rightHeight = getMaxHeight(node.right);

    // Return the larger value
    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
  }
};

// get nodes at a specific level
let getHLevelOrder = function (root, level, output) {
  if (root == null) {
    return;
  }
  if (level == 1) {
    output.push(root.val);
  } else if (level > 1) {
    getHLevelOrder(root.left, level - 1, output);
    getHLevelOrder(root.right, level - 1, output);
  }
};

let levelOrderTraversalR = function (root) {
  const h = getMaxHeight(root);
  let output = [];
  for (let i = 0; i < h + 1; i++) {
    getHLevelOrder(root, i, output);
  }
  return output.join(" ");
};
