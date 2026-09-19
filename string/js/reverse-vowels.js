var reverseVowels = function (s) {
  const chars = s.split("");
  const vowels = new Set("aeiouAEIOU");

  let left = 0,
    right = s.length - 1;
  while (left < right) {
    while (left < right && !vowels.has(chars[left])) {
      left++;
    }
    while (left < right && !vowels.has(chars[right])) {
      right--;
    }

    if (left < right) {
      let temp = chars[left];
      chars[left] = chars[right];
      chars[right] = temp;
      left++;
      right--;
    }
  }

  return chars.join("");
};
