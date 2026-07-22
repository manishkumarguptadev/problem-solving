function insertInterval(intervals, newInterval) {
  const result = [];

  let i = 0;

  // add all the intervals ending before newInterval starts
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // merge all overlapping intervals to one considering newInterval
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval = [
      Math.min(intervals[i][0], newInterval[0]),
      Math.max(intervals[i][1], newInterval[1]),
    ];
    i++;
  }
  // add the union of intervals we got
  result.push(newInterval);

  // add all the rest
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}
