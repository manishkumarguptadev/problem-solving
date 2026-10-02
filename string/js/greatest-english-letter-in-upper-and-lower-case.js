var greatestLetter = function (s) {
  const characterPresence = new Array(128).fill(false);

  for (const character of s) {
    const asciiValue = character.charCodeAt(0);
    characterPresence[asciiValue] = true;
  }

  for (let uppercaseAscii = 90; uppercaseAscii >= 65; uppercaseAscii--) {
    const lowercaseAscii = uppercaseAscii + 32;
    if (
      characterPresence[uppercaseAscii] &&
      characterPresence[lowercaseAscii]
    ) {
      return String.fromCharCode(uppercaseAscii);
    }
  }

  return "";
};
