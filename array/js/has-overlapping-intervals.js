function hasOverlappingIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length - 1; i++) {
    let a = intervals[i];
    let b = intervals[i + 1];
    if (a[1] >= b[0]) {
      return true;
    }
  }

  return false;
}

console.log(
  hasOverlappingIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
