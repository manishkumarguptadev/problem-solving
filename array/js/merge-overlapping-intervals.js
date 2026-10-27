function merge(intervals) {
  // Step 1. sort the intervals by start time
  intervals.sort((a, b) => a.start - b.start);

  // Step 2. go through the intervals
  let i = 0;

  for (let j = 1; j < intervals.length; j++) {
    const curr = intervals[i];
    const next = intervals[j];

    if (next.start <= curr.end) {
      curr.end = Math.max(curr.end, next.end);
    } else {
      i++;
      intervals[i] = next;
    }
  }

  return intervals.slice(0, i + 1);
}

function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let merged = [];
  merged.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    let a = merged[merged.length - 1];
    let b = intervals[i];
    if (a[1] >= b[0]) {
      a[1] = Math.max(a[1], b[1]);
    } else {
      merged.push(b);
    }
  }

  return merged;
}
