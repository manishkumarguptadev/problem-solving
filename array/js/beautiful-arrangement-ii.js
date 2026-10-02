function constructArray(n, k) {
  let left = 1;
  let right = n;
  const result = new Array(n);

  // First k elements: alternate between picking from left and right
  // This creates k distinct differences
  for (let i = 0; i < k; i++) {
    if (i % 2 === 0) {
      // Even index: pick from left side
      result[i] = left;
      left++;
    } else {
      // Odd index: pick from right side
      result[i] = right;
      right--;
    }
  }

  // Remaining elements: continue in the same direction as the last element
  // This ensures no new distinct differences are introduced
  for (let i = k; i < n; i++) {
    if (k % 2 === 0) {
      // If k is even, last element was from left, so continue from right
      result[i] = right;
      right--;
    } else {
      // If k is odd, last element was from right, so continue from left
      result[i] = left;
      left++;
    }
  }

  return result;
}
