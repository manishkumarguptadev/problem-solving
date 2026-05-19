const removeVowels = (str) => str.replace(/[aeiouAEIOU]/g, "");
// console.log(removeVowels("Hello, World!"));

const removeWhitespace = (str) => str.replace(/\s/g, "");
// console.log(removeWhitespace(" Hello, world! "));

const removeDuplicatesFromString = (str) =>
  [...new Set(str.split(""))].join("");
// console.log(removeDuplicatesFromString("hello"));
