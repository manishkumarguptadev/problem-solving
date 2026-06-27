function longestUniformSubstringAfterReplacements(s, k) {
  const freqs = new Map();
  let highestFreq = 0;
  let maxLen = 0;

  let left = 0;
  for (let right = 0; right < s.length; right++) {
    freqs.set(s[right], (freqs.get(s[right]) || 0) + 1);
    highestFreq = Math.max(highestFreq, freqs.get(s[right]));

    const numCharsToReplace = right - left + 1 - highestFreq;

    if (numCharsToReplace > k) {
      freqs.set(s[left], freqs.get(s[left]) - 1);
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

console.log(longestUniformSubstringAfterReplacements("aabcdcca", 2));
