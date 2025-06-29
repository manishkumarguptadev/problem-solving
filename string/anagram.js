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

function areAnagramsNaive(strA, strB) {
  for (let char of strB) {
    const charIndex = strA.indexOf(char);
    if (charIndex === -1) {
      return false;
    }
    strA = strA.substring(0, charIndex) + strA.substring(charIndex + 1);
  }
  return strA.length ? false : true;
}

console.log(areAnagramsNaive("greate", "rgeeat"));
