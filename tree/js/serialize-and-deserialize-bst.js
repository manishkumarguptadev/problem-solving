function serialize(root) {
  if (!root) {
    return "";
  }

  let serializedData = "";

  // Preorder traversal to build the serialized string
  const preorderTraverse = (node) => {
    if (!node) {
      return;
    }

    serializedData += node.val.toString() + " ";

    preorderTraverse(node.left);

    preorderTraverse(node.right);
  };

  preorderTraverse(root);

  // Remove trailing space
  serializedData = serializedData.slice(0, -1);

  return serializedData;
}

function deserialize(data) {
  if (data.length === 0) {
    return null;
  }

  // Parse the string into an array of integers
  const nodeValues = splitString(data, " ");
  let currentIndex = 0;

  // Recursively build the BST using value bounds
  const buildTree = (minBound, maxBound) => {
    // Check if we've processed all values or current value is out of bounds
    if (
      currentIndex === nodeValues.length ||
      nodeValues[currentIndex] < minBound ||
      nodeValues[currentIndex] > maxBound
    ) {
      return null;
    }

    const currentValue = nodeValues[currentIndex];
    currentIndex++;

    const node = new TreeNode(currentValue);

    node.left = buildTree(minBound, currentValue);

    node.right = buildTree(currentValue, maxBound);

    return node;
  };

  // Start building with full integer range
  return buildTree(-Infinity, Infinity);
}

function splitString(str, delimiter) {
  const result = [];

  // Split the string by delimiter and convert each token to integer
  const tokens = str.split(delimiter);

  for (const token of tokens) {
    if (token.length > 0) {
      result.push(parseInt(token, 10));
    }
  }

  return result;
}
