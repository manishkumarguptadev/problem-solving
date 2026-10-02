var reverseOnlyLetters = function (s) {
  const characters = [...s];

  let left = 0;
  let right = characters.length - 1;

  while (left < right) {
    while (!/[a-zA-Z]/.test(characters[left]) && left < right) {
      left++;
    }

    while (!/[a-zA-Z]/.test(characters[right]) && left < right) {
      right--;
    }

    [characters[left], characters[right]] = [
      characters[right],
      characters[left],
    ];

    left++;
    right--;
  }

  return characters.join("");
};
