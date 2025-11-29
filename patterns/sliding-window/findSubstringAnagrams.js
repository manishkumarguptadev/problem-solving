var findSubstringAnagrams = function (s, p) {
  let lenS = s.length;
  let lenP = p.length;
  if (lenP > lenS) {
    return [];
  }
  let result = [];
  let expectedFreqs = Array(26).fill(0);
  let windowFreqs = Array(26).fill(0);
  for (let c of p) {
    expectedFreqs[c.charCodeAt(0) - 97]++;
  }
  let left = 0,
    right = 0;
  while (right < lenS) {
    windowFreqs[s.charCodeAt(right) - 97]++;

    if (right - left + 1 == lenP) {
      if (compareFreqs(windowFreqs, expectedFreqs)) {
        result.push(left);
      }

      windowFreqs[s.charCodeAt(left) - 97]--;
      left += 1;
    }
    right += 1;
  }
  return result;
};

function compareFreqs(windowFreqs, expectedFreqs) {
  for (let i = 0; i < 26; i++) {
    if (windowFreqs[i] !== expectedFreqs[i]) return false;
  }
  return true;
}
console.log(findSubstringAnagrams("caabab", "aba"));
