var shortestPalindrome = function (s) {
  if (s.length <= 1) return s;

  const rev = s.split("").reverse().join("");
  const combined = s + "#" + rev;

  // we build KMP prefix table
  const lps = new Array(combined.length).fill(0);

  for (let i = 1; i < combined.length; i++) {
    let j = lps[i - 1];
    while (j > 0 && combined[i] !== combined[j]) {
      j = lps[j - 1];
    }
    if (combined[i] === combined[j]) {
      j++;
    }
    lps[i] = j;
  }

  // Longest palindromic prefix length
  const longestPrefix = lps[combined.length - 1];

  // Add the remaining reversed suffix in front
  return rev.substring(0, s.length - longestPrefix) + s;
};
