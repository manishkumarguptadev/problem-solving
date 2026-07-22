var repeatedStringMatch = function (a, b) {
  let repeated = a;
  let count = 1;

  while (repeated.length < b.length) {
    repeated += a;
    count++;
  }

  if (repeated.includes(b)) {
    return count;
  }
  repeated += a;
  return repeated.includes(b) ? count + 1 : -1;
};
