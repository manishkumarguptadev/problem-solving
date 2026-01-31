var hammingWeight = function (n) {
  let count = 0;
  while (n > 0) {
    if ((n & 1) !== 0) {
      count++;
    }
    n = n >> i;
  }
  return count;
};
