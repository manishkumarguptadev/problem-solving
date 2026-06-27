var carPooling = function (trips, capacity) {
  let passengersAtThisPoint = new Array(1001).fill(0);
  for (let [num, start, end] of trips) {
    passengersAtThisPoint[start] += num;
    passengersAtThisPoint[end] -= num;
  }
  let curr = 0;
  for (let i = 0; i < 1001; i++) {
    curr += passengersAtThisPoint[i];
    if (curr > capacity) {
      return false;
    }
  }
  return true;
};
