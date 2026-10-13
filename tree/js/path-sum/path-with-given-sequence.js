function find_path(root, sequence) {
  if (root === null) {
    return sequence.length === 0;
  }

  const seqLen = sequence.length;
  function dfs(node, index) {
    if (node === null) {
      return false;
    }

    if (index >= seqLen || node.val !== sequence[index]) {
      return false;
    }

    // if the current node is a leaf,
    // and it is the end of the sequence,
    // we have found a path!
    if (node.left === null && node.right === null && index === seqLen - 1) {
      return true;
    }

    // recursively call to traverse the left and right sub-tree
    // return true if any of the two recursive call return true
    return dfs(node.left, index + 1) || dfs(node.right, index + 1);
  }

  return dfs(root, 0);
}
