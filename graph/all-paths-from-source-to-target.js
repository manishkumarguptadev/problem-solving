var allPathsSourceTarget = function (graph) {
  const result = [];
  const target = graph.length - 1;

  function dfs(node, path) {
    path.push(node);

    if (node === target) {
      result.push([...path]); // we copy the path
    } else {
      for (const neighbor of graph[node]) {
        dfs(neighbor, path);
      }
    }

    path.pop(); // we backtrack
  }

  dfs(0, []);
  return result;
};
