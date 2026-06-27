var countAndSay = function (n) {
  let currentSequence = "1";

  for (let iteration = 1; iteration < n; iteration++) {
    let nextSequence = "";

    let currentChar = currentSequence[0];
    let charCount = 0;

    for (let charIndex = 0; charIndex < currentSequence.length; charIndex++) {
      if (currentSequence[charIndex] !== currentChar) {
        nextSequence += `${charCount}${currentChar}`;

        currentChar = currentSequence[charIndex];
        charCount = 0;
      }

      charCount++;
    }

    nextSequence += `${charCount}${currentChar}`;

    currentSequence = nextSequence;
  }

  return currentSequence;
};
