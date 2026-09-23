function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

var cloneGraph = function (node) {
  if (!node) {
    return null;
  }
  const map = new Map();

  const dfs = (node) => {
    if (map.has(node)) {
      return map.get(node);
    }

    const copy = new Node(node.val);
    map.set(node, copy);

    node.neighbors.forEach((neighbor) => {
      copy.neighbors.push(dfs(neighbor));
    });

    return copy;
  };

  return dfs(node);
};

var cloneGraph = function (node) {
  if (!node) {
    return null;
  }
  const map = new Map();

  const dfs = (node) => {
    const copy = new Node(node.val);
    map.set(node, copy);

    for (let neighbor of node.neighbors) {
      let x = map.get(neighbor);
      if (!x) {
        copy.neighbors.push(dfs(neighbor));
      } else {
        copy.neighbors.push(x);
      }
    }

    return copy;
  };

  return dfs(node);
};

var cloneGraph = function (node) {
  if (!node) {
    return null;
  }

  const getCopy = (node) => {
    if (map.has(node)) {
      return map.get(node);
    }
    const copy = new Node(node.val);
    map.set(node, copy);
    return copy;
  };

  const map = new Map();
  const queue = [node];
  const visited = new Set();

  visited.add(node);

  while (queue.length > 0) {
    const node = queue.shift();
    const copy = getCopy(node);

    node.neighbors.forEach((neighbor) => {
      const neighborCopy = getCopy(neighbor);
      copy.neighbors.push(neighborCopy);

      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    });
  }

  return map.get(node);
};
