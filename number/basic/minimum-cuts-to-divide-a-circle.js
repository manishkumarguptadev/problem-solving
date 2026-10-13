var numberOfCuts = function (n) {
  if (n > 1 && n & 1) {
    return n;
  } else {
    return n >> 1;
  }
};
