const countOccurrences = (str, char) => str.split(char).length - 1;
// console.log(countOccurrences("banana", "a"));

const countLetters = (str) => {
  const letters = str.toLowerCase().match(/[a-z]/g);
  const letterCount = {};
  for (const letter of letters) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }
  return letterCount;
};
// console.log(countLetters("Hello, World!"));

const countVowels = (str) => (str.match(/[aeiou]/gi) || []).length;
// console.log(countVowels('Hello, how are you?'));

const countWords = (str) => str.trim().split(/\s+/).length;
// console.log(countWords("Hello world, how are you?"));
