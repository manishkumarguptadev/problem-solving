var isThree = function (n) {
  if (n === 1) {
    return false;
  }
  let numDiv = 2;

  const sqrt = Math.sqrt(n);

  if (Number.isInteger(sqrt)) {
    numDiv++;
  }

  for (let i = 2; i < sqrt; i++) {
    if (n % i === 0) {
      numDiv += 2;
    }
    if (numDiv > 3) {
      return false;
    }
  }

  return numDiv === 3;
};

var isThree = function (n) {
  let divisorCount = 0;

  for (let i = 2; i < n; ++i) {
    if (n % i === 0) {
      ++divisorCount;
    }
  }

  return divisorCount === 1;
};
