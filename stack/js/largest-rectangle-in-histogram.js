function largestRectangleArea(heights) {
  const n = heights.length;
  const monotoneStack = []; // Monotonic increasing stack storing indices

  // For each position, store the index of the nearest smaller element to the left
  const leftBoundary = new Array(n).fill(-1);
  // For each position, store the index of the nearest smaller element to the right
  const rightBoundary = new Array(n).fill(n);

  // Single pass to find both left and right boundaries
  for (let i = 0; i < n; i++) {
    // Pop elements from stack that are greater than or equal to current height
    // For popped elements, current index i is their right boundary
    while (
      monotoneStack.length > 0 &&
      heights[monotoneStack[monotoneStack.length - 1]] >= heights[i]
    ) {
      rightBoundary[monotoneStack[monotoneStack.length - 1]] = i;
      monotoneStack.pop();
    }

    // After popping, stack top (if exists) is the left boundary for current element
    if (monotoneStack.length > 0) {
      leftBoundary[i] = monotoneStack[monotoneStack.length - 1];
    }

    // Push current index to maintain monotonic property
    monotoneStack.push(i);
  }

  let maxArea = 0;
  // Calculate the maximum rectangle area for each bar as the minimum height
  for (let i = 0; i < n; i++) {
    // Width extends from (leftBoundary + 1) to (rightBoundary - 1)
    const width = rightBoundary[i] - leftBoundary[i] - 1;
    const area = heights[i] * width;
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
}
