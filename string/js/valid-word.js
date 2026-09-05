function isValid(word) {
  // Check minimum length requirement
  if (word.length < 3) {
    return false;
  }

  // Track whether vowel and consonant are found
  let hasVowel = false;
  let hasConsonant = false;

  // Define set of vowels (both lowercase and uppercase)
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  // Iterate through each character in the word
  for (const character of word) {
    // Check if character is alphanumeric
    if (!/[a-zA-Z0-9]/.test(character)) {
      return false;
    }

    // If character is a letter, check if it's a vowel or consonant
    if (/[a-zA-Z]/.test(character)) {
      if (vowels.has(character)) {
        hasVowel = true;
      } else {
        hasConsonant = true;
      }
    }
  }

  // Word is valid only if it contains both vowel and consonant
  return hasVowel && hasConsonant;
}
