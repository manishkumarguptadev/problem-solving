// function allAnagrams(strings) {
//   const sortedStrings = strings.map((str) => str.split("").sort().join(""));

//   for (let i = 1; i < strings.length; i++) {
//     if (sortedStrings[i] !== sortedStrings[0]) {
//       return false;
//     }
//   }

//   return true;
// }

function getCharCount(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (charCount[char] === undefined) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }

  return charCount;
}

function allAnagrams(strings) {
  if (strings.length === 0) {
    return true;
  }

  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length !== strings[0].length) {
      return false;
    }
  }

  const firstCharCount = getCharCount(strings[0]);

  for (let i = 1; i < strings.length; i++) {
    const thisCharCount = getCharCount(strings[i]);

    for (const char in thisCharCount) {
      if (thisCharCount[char] !== firstCharCount[char]) {
        return false;
      }
    }
  }

  return true;
}
