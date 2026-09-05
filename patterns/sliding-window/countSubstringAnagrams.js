function countSubstringAnagrams(s, t) {
  let lenS = s.length;
  let lenT = t.length;
  if (lenT > lenS) return 0;
  let count = 0;
  let expectedFreqs = Array(26).fill(0);
  let windowFreqs = Array(26).fill(0);
  for (let c of t) {
    expectedFreqs[c.charCodeAt(0) - 97]++;
  }
  let left, right;
  left = right = 0;
  while (right < lenS) {
    windowFreqs[s.charCodeAt(right) - 97]++;

    if (right - left + 1 == lenT) {
      if (compareFreqs(windowFreqs, expectedFreqs)) {
        count += 1;
      }

      windowFreqs[s.charCodeAt(left) - 97]--;
      left += 1;
    }
    right += 1;
  }
  return count;
}

function compareFreqs(windowFreqs, expectedFreqs) {
  for (let i = 0; i < 26; i++) {
    if (windowFreqs[i] !== expectedFreqs[i]) return false;
  }
  return true;
}
console.log(countSubstringAnagrams("caabab", "aba"));
