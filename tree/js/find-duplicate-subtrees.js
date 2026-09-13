var findDuplicateSubtrees = function (root) {
  // Map to store serialized subtree representations and their occurrence count
  const subtreeCountMap = new Map();

  // Array to store the result - root nodes of duplicate subtrees
  const duplicateSubtrees = [];

  const serializeAndFindDuplicates = (node) => {
    // Base case: null node represented as '#'
    if (node === null) {
      return "#";
    }

    const leftSerialized = serializeAndFindDuplicates(node.left);
    const rightSerialized = serializeAndFindDuplicates(node.right);

    // Create unique serialization for current subtree
    // Format: "nodeValue,leftSubtree,rightSubtree"
    const currentSubtreeSerialized = `${node.val},${leftSerialized},${rightSerialized}`;

    // Update occurrence count for this subtree structure
    const currentCount = subtreeCountMap.get(currentSubtreeSerialized) || 0;
    subtreeCountMap.set(currentSubtreeSerialized, currentCount + 1);

    // Add to result only when we encounter the second occurrence
    // This ensures each duplicate subtree is added only once
    if (subtreeCountMap.get(currentSubtreeSerialized) === 2) {
      duplicateSubtrees.push(node);
    }

    return currentSubtreeSerialized;
  };

  serializeAndFindDuplicates(root);

  return duplicateSubtrees;
};
