function permutationInString(s1, s2) {
  let matched = 0,
    freqs = new Map();

  for (i = 0; i < s1.length; i++) {
    freqs.set(s1[i], (freqs.get(s1[i]) || 0) + 1);
  }

  let left = 0;
  for (let right = 0; right < s2.length; right++) {
    const rightChar = s2[right];

    if (freqs.get(rightChar) !== undefined) {
      freqs.set(rightChar, freqs.get(rightChar) - 1);
      if (freqs.get(rightChar) === 0) {
        matched++;
      }
    }

    if (matched === freqs.size) {
      return true;
    }

    // Shrink the sliding window
    if (right >= s1.length - 1) {
      const leftChar = s2[left];

      if (freqs.get(leftChar) !== undefined) {
        if (freqs.get(leftChar) === 0) {
          matched--;
        }
        freqs.set(leftChar, freqs.get(leftChar) + 1);
      }
      left++;
    }
  }

  return false;
}

console.log(`Permutation exist: ${find_permutation("abc", "oidbcaf")}`);
console.log(`Permutation exist: ${find_permutation("dc", "odicf")}`);
console.log(`Permutation exist: ${find_permutation("bcdyabcdx", "bcdxabcdy")}`);
console.log(`Permutation exist: ${find_permutation("abc", "aaacb")}`);
