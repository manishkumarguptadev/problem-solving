function smallestWindowContainingSubstring(str, pattern) {
  let matched = 0,
    substrStart = 0,
    minLen = str.length + 1,
    freqs = new Map();

  for (let i = 0; i < pattern.length; i++) {
    freqs.set(pattern[i], (freqs.get(pattern[i]) || 0) + 1);
  }

  let left = 0;
  for (let right = 0; right < str.length; right++) {
    const rightChar = str[right];

    if (freqs.get(rightChar) !== undefined) {
      freqs.set(rightChar, freqs.get(rightChar) - 1);
      if (freqs.get(rightChar) >= 0) {
        matched++;
      }
    }

    while (matched === pattern.length) {
      if (minLen > right - left + 1) {
        minLen = right - left + 1;
        substrStart = left;
      }

      const leftChar = str[left];

      if (freqs.get(leftChar) !== undefined) {
        if (freqs.get(leftChar) === 0) {
          matched--;
        }
        freqs.set(leftChar, freqs.get(leftChar) + 1);
      }
      left++;
    }
  }

  if (minLen > str.length) {
    return "";
  }
  return str.substring(substrStart, substrStart + minLen);
}

console.log(find_substring("aabdec", "abc"));
console.log(find_substring("abdabca", "abc"));
console.log(find_substring("adcad", "abc"));
