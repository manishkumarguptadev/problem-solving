function longestMountain(arr) {
  const n = arr.length;

  // Arrays to store the length of increasing/decreasing sequences
  // increasing[i]: length of strictly increasing sequence ending at i
  // decreasing[i]: length of strictly decreasing sequence starting at i
  const increasing = new Array(n).fill(1);
  const decreasing = new Array(n).fill(1);

  // Calculate the length of increasing sequences from left to right
  // If current element is greater than previous, extend the sequence
  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
      increasing[i] = increasing[i - 1] + 1;
    }
  }

  let maxMountainLength = 0;

  // Calculate the length of decreasing sequences from right to left
  // Also check if current position can be a peak of a mountain
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      decreasing[i] = decreasing[i + 1] + 1;

      // A valid mountain peak must have increasing sequence before it
      // (increasing[i] > 1) ensures there's at least one element before peak
      if (increasing[i] > 1) {
        // Mountain length = left side + right side - 1 (peak counted twice)
        const currentMountainLength = increasing[i] + decreasing[i] - 1;
        maxMountainLength = Math.max(maxMountainLength, currentMountainLength);
      }
    }
  }

  return maxMountainLength;
}
