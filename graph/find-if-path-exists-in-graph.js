var validPath = function (n, edges, source, destination) {
  // we create the graph as an adjacency list
  let graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  // we implement BFS
  let queue = [source]; // Using an array to simulate a queue
  let visited = new Set([source]);

  while (queue.length > 0) {
    let current = queue.shift(); // we dequeue the first element
    if (current === destination) {
      return true; // we found a path to the destination
    }
    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return false; // No path found
};

var validPath = function (n, edges, source, destination) {
  const adj = Array.from({ length: n }, () => []);

  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  const visited = new Set();

  function dfs(node) {
    if (node === destination) {
      return true;
    }

    visited.add(node);

    for (let neighbor of adj[node]) {
      if (!visited.has(neighbor) && dfs(neighbor)) {
        return true;
      }
    }

    return false;
  }

  return dfs(source);
};
