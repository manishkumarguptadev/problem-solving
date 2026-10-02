var longestPalindrome = function (s) {
  const characterFrequency = {};

  for (const character of s) {
    characterFrequency[character] = (characterFrequency[character] || 0) + 1;
  }

  let palindromeLength = Object.values(characterFrequency).reduce(
    (accumulator, frequency) => accumulator + Math.floor(frequency / 2) * 2,
    0,
  );

  palindromeLength += palindromeLength < s.length ? 1 : 0;

  return palindromeLength;
};
