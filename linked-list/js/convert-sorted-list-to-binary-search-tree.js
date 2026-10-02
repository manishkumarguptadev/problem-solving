var sortedListToBST = function (head) {
  const sortedValues = [];
  let curr = head;

  while (curr !== null) {
    sortedValues.push(curr.val);
    curr = curr.next;
  }

  const buildBST = (startIndex, endIndex) => {
    if (startIndex > endIndex) {
      return null;
    }

    const middleIndex = (startIndex + endIndex) >> 1;

    const leftSubtree = buildBST(startIndex, middleIndex - 1);
    const rightSubtree = buildBST(middleIndex + 1, endIndex);

    const root = {
      val: sortedValues[middleIndex],
      left: leftSubtree,
      right: rightSubtree,
    };

    return root;
  };

  return buildBST(0, sortedValues.length - 1);
};
