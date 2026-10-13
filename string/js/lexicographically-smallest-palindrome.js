var makeSmallestPalindrome = function (s) {
  const characters = s.split("");

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const smallerChar = s[left] < s[right] ? s[left] : s[right];

    characters[left] = smallerChar;
    characters[right] = smallerChar;

    left++;
    right--;
  }

  return characters.join("");
};
