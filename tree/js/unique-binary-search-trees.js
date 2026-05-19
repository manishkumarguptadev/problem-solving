var numTrees = function (n) {
  let uniqTree = [1];

  for (let nodes = 1; nodes <= n; nodes++) {
    let total = 0;
    for (let root = 1; root <= nodes; root++) {
      total += uniqTree[root - 1] * uniqTree[nodes - root];
    }
    uniqTree[nodes] = total;
  }

  return uniqTree[n];
};

function numTrees(n) {
  if (n <= 1) {
    return 1;
  }
  let count = 0;
  for (let i = 1; i < n + 1; i++) {
    // making 'i' the root of the tree
    const countOfLeftSubtrees = numTrees(i - 1);
    const countOfRightSubtrees = numTrees(n - i);
    count += countOfLeftSubtrees * countOfRightSubtrees;
  }
  return count;
}

function numTrees(n) {
  return numTrees_rec({}, n);
}

function numTrees_rec(map, n) {
  if (n in map) {
    return map[n];
  }

  if (n <= 1) {
    return 1;
  }
  let count = 0;
  for (let i = 1; i < n + 1; i++) {
    // making 'i' the root of the tree
    countOfLeftSubtrees = numTrees_rec(map, i - 1);
    countOfRightSubtrees = numTrees_rec(map, n - i);
    count += countOfLeftSubtrees * countOfRightSubtrees;
  }

  map[n] = count;
  return count;
}
