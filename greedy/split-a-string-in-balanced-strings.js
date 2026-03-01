var balancedStringSplit = function (s) {
  let res = 0;
  let count = 0;

  for (const char of s) {
    if (char === "R") {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      res++;
    }
  }

  return res;
};
var balancedStringSplit = function (s) {
  let res = 0;
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] == s[0]) {
      count++;
    } else {
      count--;
    }
    if (count == 0) {
      res++;
    }
  }

  return res;
};
