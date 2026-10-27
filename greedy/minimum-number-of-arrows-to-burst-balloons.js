function findMinArrowShots(points) {
  // Sort balloons by their end position in ascending order
  points.sort((a, b) => a[1] - b[1]);

  let arrowCount = 0;

  let lastArrowPosition = -Infinity;

  // Iterate through each balloon interval
  for (const [startPosition, endPosition] of points) {
    // If current balloon starts after the last arrow position,
    // we need a new arrow
    if (lastArrowPosition < startPosition) {
      arrowCount++;
      // Shoot the arrow at the end position of current balloon
      // to potentially burst more overlapping balloons
      lastArrowPosition = endPosition;
    }
  }

  return arrowCount;
}
