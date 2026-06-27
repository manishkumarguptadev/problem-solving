var strStr = function (haystack, needle) {
  const n = haystack.length;
  const m = needle.length;

  for (let i = 0; i <= n - m; i++) {
    let j = 0;

    while (j < m && haystack.charAt(i + j) === needle.charAt(j)) {
      j++;
    }

    if (j == m) {
      return i;
    }
  }

  return -1;
};
var strStr = function (haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};
