const topKFrequent = (words, k) => {
  const result = [];
  const map = new Map();
  const maxHeap = new PriorityQueue({
    comparator: (a, b) => {
      // If counts are different, higher count comes first (Max Heap behavior)
      if (a.count !== b.count) {
        return b.count - a.count;
      }
      // If counts are equal, alphabetically smaller word comes first
      return a.key.localeCompare(b.key);
    },
  });

  // Count the words
  words.forEach((word) => {
    if (!map.has(word)) {
      map.set(word, 0);
    }
    map.set(word, map.get(word) + 1);
  });

  // Put the counted words to a max heap
  map.forEach((count, key) => {
    queue.push({ key, count });
  });

  // Dequeue the max heap to results
  while (k-- > 0 && !queue.isEmpty()) {
    const { key } = queue.pop();
    result.push(key);
  }

  return result;
};
