var romanToInt = function (s) {
  let res = 0;
  const map = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  for (let i = 0; i < s.length - 1; i++) {
    if (map.get(s[i]) < map.get(s[i + 1])) {
      res -= map.get(s[i]);
    } else {
      res += map.get(s[i]);
    }
  }

  return res + map.get(s[s.length - 1]);
};
