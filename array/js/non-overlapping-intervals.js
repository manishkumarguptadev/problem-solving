function eraseOverlapIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let prev_end = intervals[0][1];
  let count = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= prev_end) {
      prev_end = intervals[i][1];
    } else {
      count++;
      prev_end = Math.min(prev_end, intervals[i][1]);
    }
  }

  return count;
}

var eraseOverlapIntervals = function (intervals) {
  let count = 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let prev_end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= prev_end) {
      prev_end = intervals[i][1];
    } else {
      count++;
    }
  }

  return count;
};
