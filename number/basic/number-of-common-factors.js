var commonFactors = function (a, b) {
  let minval = Math.min(a, b);
  let count = 0;
  for (let i = 1; i <= minval; i++) {
    if (a % i === 0 && b % i === 0) {
      count++;
    }
  }
  return count;
};
