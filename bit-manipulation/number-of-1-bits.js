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

const hammingWeight = (n) => {
  let count = 0;
  for (let i = 0; i < 32; i++) {
    if ((n & 1) !== 0) {
      count++;
    }
    n >>= 1;
  }
  return count;
};
