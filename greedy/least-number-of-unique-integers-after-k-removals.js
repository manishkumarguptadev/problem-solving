function findLeastNumOfUniqueInts(arr, k) {
  // Create a frequency map to count occurrences of each unique integer
  const frequencyMap = new Map();

  // Count the frequency of each integer in the array
  for (const num of arr) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Extract all frequencies and sort them in ascending order
  // Strategy: Remove integers with lowest frequencies first to minimize unique count
  const frequencies = [...frequencyMap.values()].sort((a, b) => a - b);

  // Iterate through sorted frequencies and remove integers starting from lowest frequency
  for (let i = 0; i < frequencies.length; i++) {
    // Subtract current frequency from remaining removals
    k -= frequencies[i];

    // If we can't completely remove this integer, return remaining unique count
    if (k < 0) {
      return frequencies.length - i;
    }
  }

  // All unique integers were removed
  return 0;
}
