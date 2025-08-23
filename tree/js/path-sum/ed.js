var pathSum = function (root, targetSum) {
  function helper(root, path) {
    if (root === null) {
      return 0;
    }
    path.push(root.val);

    let pathCount = 0;
    let pathSum = 0;
    for (let i = path.length - 1; i >= 0; i--) {
      pathSum += path[i];
      if (pathSum === targetSum) {
        pathCount += 1;
      }
    }
    pathCount += helper(root.left, path);
    pathCount += helper(root.right, path);

    path.pop();
    return pathCount;
  }
  return helper(root, []);
};
export { pathSum };
