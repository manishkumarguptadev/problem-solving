var numberOfSpecialChars = function (word) {
  const lower = new Array(26).fill(-1);

  const upper = new Array(26).fill(-1);

  for (let i = 0; i < word.length; i++) {
    const ch = word[i];

    if (ch >= "a" && ch <= "z") {
      lower[ch.charCodeAt(0) - 97] = i;
    } else {
      const idx = ch.charCodeAt(0) - 65;

      if (upper[idx] === -1) {
        upper[idx] = i;
      }
    }
  }

  let count = 0;

  for (let i = 0; i < 26; i++) {
    if (lower[i] !== -1 && upper[i] !== -1) {
      if (lower[i] < upper[i]) {
        count++;
      }
    }
  }

  return count;
};
