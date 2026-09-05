var minCostConnectPoints = function (points) {
  const numberOfPoints = points.length;

  // Build adjacency matrix to store Manhattan distances between all pairs of points
  const adjacencyMatrix = Array(numberOfPoints)
    .fill(0)
    .map(() => Array(numberOfPoints).fill(0));

  // Track minimum distance to connect each point to the MST
  const minDistance = Array(numberOfPoints).fill(1 << 30);

  // Track which points have been added to the MST
  const visited = Array(numberOfPoints).fill(false);

  // Calculate Manhattan distance between all pairs of points
  for (let i = 0; i < numberOfPoints; ++i) {
    const [x1, y1] = points[i];
    for (let j = i + 1; j < numberOfPoints; ++j) {
      const [x2, y2] = points[j];
      const manhattanDistance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
      adjacencyMatrix[i][j] = manhattanDistance;
      adjacencyMatrix[j][i] = manhattanDistance;
    }
  }

  let totalCost = 0;
  // Start from point 0 with distance 0
  minDistance[0] = 0;

  // Build MST by adding one point at a time
  for (let i = 0; i < numberOfPoints; ++i) {
    let nextPoint = -1;

    // Find the unvisited point with minimum distance to the MST
    for (let k = 0; k < numberOfPoints; ++k) {
      if (
        !visited[k] &&
        (nextPoint === -1 || minDistance[k] < minDistance[nextPoint])
      ) {
        nextPoint = k;
      }
    }

    // Add the selected point to the MST
    visited[nextPoint] = true;
    totalCost += minDistance[nextPoint];

    // Update minimum distances for remaining unvisited points
    for (let k = 0; k < numberOfPoints; ++k) {
      if (!visited[k]) {
        minDistance[k] = Math.min(
          minDistance[k],
          adjacencyMatrix[nextPoint][k],
        );
      }
    }
  }

  return totalCost;
};
