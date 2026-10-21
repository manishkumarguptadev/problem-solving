class MyCalendar {
  constructor() {
    this.intervals = [];
  }

  book(startTime, endTime) {
    let lo = 0;
    let hi = this.intervals.length - 1;

    while (lo <= hi) {
      const mid = lo + Math.floor((hi - lo) / 2);
      const midInterval = this.intervals[mid];

      if (endTime <= midInterval[0]) {
        hi = mid - 1;
      } else if (startTime >= midInterval[1]) {
        lo = mid + 1;
      } else {
        return false;
      }
    }

    this.intervals.splice(lo, 0, [startTime, endTime]);

    return true;
  }
}
