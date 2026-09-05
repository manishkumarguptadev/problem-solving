var partitionLabels = function (s) {
  let last = {};

  for (let i = 0; i < s.length; i++) {
    last[s[i]] = i;
  }

  let result = [];
  let maxLast = 0,
    prevEnd = -1;

  for (let i = 0; i < s.length; i++) {
    maxLast = Math.max(maxLast, last[s[i]]);

    if (i === maxLast) {
      result.push(i - prevEnd);
      prevEnd = i;
    }
  }

  return result;
};
