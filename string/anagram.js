function buildCharMap(str) {
  const charMap = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (charMap[char] === undefined) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  //   for (const char of str) {
  //     charMap[char] = charMap[char] + 1 || 1;
  //     charMap[char] = (charMap[char] || 0) + 1;
  //   }

  return charMap;
}

function areAnagrams(strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }
  const charMapA = buildCharMap(strA);

  const charMapB = buildCharMap(strB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }
  for (const char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }
  return true;
}

console.log(areAnagrams("great", "rgeat"));
