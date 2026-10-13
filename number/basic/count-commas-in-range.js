var countCommas = function (n) {
  let count = 0;
  if (n < 1000) {
    return 0;
  } else {
    count = n - 1000 + 1;
  }
  return count;
};
