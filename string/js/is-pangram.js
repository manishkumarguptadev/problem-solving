function isPangram(sentence) {
  const seen = new Set();

  for (let i = 0; i < sentence.length; i++) {
    const currChar = sentence[i];

    if (/[a-zA-Z]/.test(currChar)) {
      seen.add(currChar.toLowerCase());
    }
  }

  return seen.size === 26;
}
