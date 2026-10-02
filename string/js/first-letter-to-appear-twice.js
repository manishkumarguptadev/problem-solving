var repeatedCharacter = function (s) {
  const visited = new Array(26).fill(false);

  for (const char of s) {
    const charIndex = char.charCodeAt(0) - "a".charCodeAt(0);

    if (visited[charIndex]) {
      return char;
    }

    visited[charIndex] = true;
  }
};
