// function buildCharMap(str) {
//   const charMap = {};

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     if (charMap[char] === undefined) {
//       charMap[char] = 1;
//     } else {
//       charMap[char]++;
//     }
//   }

//   //   for (const char of str) {
//   //     charMap[char] = charMap[char] + 1 || 1;
//   //     charMap[char] = (charMap[char] || 0) + 1;
//   //   }

//   return charMap;
// }

// function areAnagrams(strA, strB) {
//   if (strA.length !== strB.length) {
//     return false;
//   }
//   const charMapA = buildCharMap(strA);

//   const charMapB = buildCharMap(strB);

//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }
//   for (const char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) {
//       return false;
//     }
//   }
//   return true;
// }
function areAnagrams(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const freqs = new Map();

  for (let char of s) {
    freqs.set(char, (freqs.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!freqs.has(char) || freqs.get(char) === 0) {
      return false;
    }
    freqs.set(char, freqs.get(char) - 1);
  }

  return true;
}
function areAnagrams(strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }

  let freqs = Array(26).fill(0);

  for (let char of strA) {
    freqs[char.charCodeAt(0) - 97]++;
  }

  for (let char of strB) {
    if (freqs[char.charCodeAt(0) - 97] === 0) {
      return false;
    }
    freqs[char.charCodeAt(0) - 97]--;
  }

  return true;
}

// function areAnagramsNaive(strA, strB) {
//   for (let char of strB) {
//     const charIndex = strA.indexOf(char);
//     if (charIndex === -1) {
//       return false;
//     }
//     strA = strA.substring(0, charIndex) + strA.substring(charIndex + 1);
//   }
//   return strA.length ? false : true;
// }

console.log(areAnagrams("greate", "rgeeat"));
