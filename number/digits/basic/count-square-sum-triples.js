var countTriples = function (n) {
  let count = 0;

  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      const k = a * a + b * b;
      const c = Math.sqrt(k);
      if (Number.isInteger(c) && c <= n) {
        count++;
      }
    }
  }

  return count;
};
