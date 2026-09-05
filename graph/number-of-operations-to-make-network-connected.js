var makeConnected = function (n, connections) {
  // Initialize parent array for Union-Find where each node is its own parent initially
  const parent = Array.from({ length: n }, (_, index) => index);

  /**
   * Find operation with path compression for Union-Find.
   * Finds the root parent of a node and compresses the path for optimization.
   *
   * @param node - The node to find the root parent for
   * @returns The root parent of the node
   */
  const find = (node) => {
    // If node is not its own parent, recursively find root and compress path
    if (parent[node] !== node) {
      parent[node] = find(parent[node]);
    }
    return parent[node];
  };

  // Count of redundant cables (cables connecting already connected computers)
  let redundantCables = 0;

  // Process each connection
  for (const [computerA, computerB] of connections) {
    // Find root parents of both computers
    const rootA = find(computerA);
    const rootB = find(computerB);

    if (rootA === rootB) {
      // Computers are already connected, this cable is redundant
      redundantCables++;
    } else {
      // Union operation: connect the two components
      parent[rootA] = rootB;
      // Decrease the count of disconnected components
      n--;
    }
  }

  // n-1 represents the number of disconnected components minus 1
  // We need at least (n-1) cables to connect n components
  // Return the number of operations needed if we have enough redundant cables, otherwise -1
  return redundantCables >= n - 1 ? n - 1 : -1;
};
