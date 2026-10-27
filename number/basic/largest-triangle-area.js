function largestTriangleArea(points) {
  let maxArea = 0.0;

  // Iterate through all possible combinations of three points
  for (const point1 of points) {
    const x1 = point1[0];
    const y1 = point1[1];

    for (const point2 of points) {
      const x2 = point2[0];
      const y2 = point2[1];

      for (const point3 of points) {
        const x3 = point3[0];
        const y3 = point3[1];

        // Calculate vectors from point1 to point2 and point1 to point3
        const vector1X = x2 - x1;
        const vector1Y = y2 - y1;
        const vector2X = x3 - x1;
        const vector2Y = y3 - y1;

        // Calculate triangle area using cross product formula
        // Area = |cross product| / 2 = |v1x * v2y - v2x * v1y| / 2
        const currentArea =
          Math.abs(vector1X * vector2Y - vector2X * vector1Y) / 2.0;

        maxArea = Math.max(maxArea, currentArea);
      }
    }
  }

  return maxArea;
}
