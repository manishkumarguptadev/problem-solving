const shuffleString = (str) =>
  str
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");
// console.log(shuffleString("hello"));

const isNotEmpty = (arr) => Array.isArray(arr) && arr.length > 0;
// console.log(isNotEmpty([1, 2, 3]));

const isPositiveNumber = (str) => /^[0-9]+$/.test(str);
// console.log(isPositiveNumber('123'));

const isAnagram = (str1, str2) =>
  str1.split("").sort().join("") === str2.split("").sort().join("");
// console.log(isAnagram('listen', 'silent'));

// The isPangram function checks whether a given string is a pangram, which
// is a sentence that contains every letter of the alphabet at least once.
const isPangram = (str) => {
  const letters = new Set(str.toLowerCase().match(/[a-z]/g));
  return letters.size === 26;
};
// console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// Check if a given string is an isogram, meaning it has
// no repeating characters (case-insensitive).
const isIsogram = (str) => new Set(str.toLowerCase()).size === str.length;
// console.log(isIsogram('hello'));

// Calculate the Hamming distance between two equal-length strings, which is
// the count of differing characters at corresponding positions.
const hammingDistance = (str1, str2) =>
  [...str1].reduce((distance, char, i) => distance + (char !== str2[i]), 0);
// console.log(hammingDistance('karolin', 'kathrin'));

const shortestWord = (str) =>
  str
    .split(" ")
    .reduce(
      (shortest, word) => (word.length < shortest.length ? word : shortest),
      ""
    );
// console.log(shortestWord("This is a test sentence"));

const findLongestWord1 = (str) =>
  str
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );

const findLongestWord2 = (sentence) =>
  sentence
    .split(" ")
    .reduce((longest, word) => Math.max(longest, word.length), 0);
// console.log(findLongestWord("Hello, how are you doing?"));

const longestWordLength = (str) =>
  Math.max(...str.split(" ").map((word) => word.length));
// console.log(longestWordLength("This is a test sentence"));

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }
  return prefix;
};
// console.log(longestCommonPrefix(['apple', 'apricot', 'appetizer']));

const firstNonRepeatedChar1 = (str) => {
  const charCount = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return str.split("").find((char) => charCount[char] === 1);
};
const firstNonRepeatedChar2 = (str) =>
  [...str].find((char) => str.indexOf(char) === str.lastIndexOf(char));
// console.log(firstNonRepeatedChar('abacabad'));

const isEmptyString = (str) => str.trim().length === 0;
// console.log(isEmptyString(" "));

const truncateString = (str, maxLength) =>
  str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
// console.log(truncateString("Hello, world!", 5));

const containsOnlyNumbers = (str) => /^[0-9]+$/.test(str);
// console.log(containsOnlyNumbers("12345"));

const randomUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
// console.log(randomUUID());

const objectToQueryParams = (obj) =>
  Object.entries(obj)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
// console.log(objectToQueryParams({ search: "hello", page: 1 }));
