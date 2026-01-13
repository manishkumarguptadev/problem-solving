/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const lastOccurrence = {};
  for (let i = 0; i < s.length; i++) {
    lastOccurrence[s[i]] = i;
  }

  const result = [];
  const visited = new Set();

  for (let i = 0; i < s.length; i++) {
    if (visited.has(s[i])) {
      continue;
    }

    while (
      result.length > 0 &&
      s[i] < result[result.length - 1] &&
      i < lastOccurrence[result[result.length - 1]]
    ) {
      visited.delete(result.pop());
    }

    visited.add(s[i]);
    result.push(s[i]);
  }

  return result.join("");
};
let replaceAt = function (string, index, character) {
  return (
    string.substr(0, index) +
    character +
    string.substr(index + character.length)
  );
};

let removeDuplicates = function (s) {
  let hashset = new Set([]);

  let writeIndex = 0;
  let readIndex = 0;

  while (readIndex < s.length) {
    if (!hashset.has(s[readIndex])) {
      hashset.add(s[readIndex]);
      s = replaceAt(s, writeIndex, s[readIndex]);
      writeIndex++;
    }
    readIndex++;
  }
  return s.substr(0, writeIndex);
};

console.log("Before: ", "dabbac");
console.log("After: ", removeDuplicates("dabbac"));
