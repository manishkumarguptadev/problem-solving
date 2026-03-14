function findMaxOverlappingIntervals(intervals) {
  const events = [];
  for (const [start, end] of intervals) {
    events.push({ time: start, type: "start" });
    events.push({ time: end, type: "end" });
  }

  events.sort((a, b) => {
    if (a.time !== b.time) {
      return a.time - b.time;
    }
    return a.type === "end" ? -1 : 1;
  });

  let maxOverlap = 0;
  let currentOverlap = 0;

  for (const event of events) {
    if (event.type === "start") {
      currentOverlap++;
    } else {
      currentOverlap--;
    }
    maxOverlap = Math.max(maxOverlap, currentOverlap);
  }

  return maxOverlap;
}
console.log(
  findMaxOverlappingIntervals([
    [1, 3],
    [2, 6],
    [4, 8],
    [6, 7],
    [5, 7],
  ])
);
