function constructFromPrePost(preorder, postorder) {
  const arrayLength = postorder.length;

  // Build the index map for quick lookup of positions in postorder
  const postorderIndexMap = new Map();
  for (let i = 0; i < arrayLength; i++) {
    postorderIndexMap.set(postorder[i], i);
  }

  const buildSubtree = (
    preorderStartIndex,
    postorderStartIndex,
    subtreeSize,
  ) => {
    if (subtreeSize <= 0) {
      return null;
    }

    const rootNode = new TreeNode(preorder[preorderStartIndex]);

    if (subtreeSize === 1) {
      return rootNode;
    }

    // Find the position of left subtree root in postorder array
    // The left subtree root is the second element in preorder (index + 1)
    const leftRootPostorderIndex = postorderIndexMap.get(
      preorder[preorderStartIndex + 1],
    );

    // Calculate the size of left subtree
    // All elements from postorderStartIndex to leftRootPostorderIndex (inclusive) belong to left subtree
    const leftSubtreeSize = leftRootPostorderIndex - postorderStartIndex + 1;

    // Recursively build left subtree
    rootNode.left = buildSubtree(
      preorderStartIndex + 1, // Left subtree starts right after root in preorder
      postorderStartIndex, // Left subtree starts at beginning of postorder segment
      leftSubtreeSize, // Size of left subtree
    );

    // Recursively build right subtree
    rootNode.right = buildSubtree(
      preorderStartIndex + 1 + leftSubtreeSize, // Right subtree starts after left subtree in preorder
      leftRootPostorderIndex + 1, // Right subtree starts after left subtree in postorder
      subtreeSize - 1 - leftSubtreeSize, // Remaining nodes belong to right subtree
    );

    return rootNode;
  };

  // Start building the tree from the entire arrays
  return buildSubtree(0, 0, arrayLength);
}
