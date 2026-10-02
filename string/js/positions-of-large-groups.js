var largeGroupPositions = function (s) {
  const result = [];

  let i = 0;
  let j = 0;

  while (j < s.length) {
    while (j < s.length && s[i] === s[j]) {
      j++;
    }

    const len = j - i;

    if (len >= 3) {
      result.push([i, j - 1]);
    }

    i = j;
  }

  return result;
};
