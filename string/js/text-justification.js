function fullJustify(words, maxWidth) {
  const result = [];
  const totalWords = words.length;
  let wordIndex = 0;

  // Process words until all are placed in lines
  while (wordIndex < totalWords) {
    // Build current line by adding words that fit within maxWidth
    const currentLineWords = [words[wordIndex]];
    let currentLineLength = words[wordIndex].length;
    wordIndex++;

    // Keep adding words while they fit (including minimum one space between words)
    while (
      wordIndex < totalWords &&
      currentLineLength + 1 + words[wordIndex].length <= maxWidth
    ) {
      currentLineWords.push(words[wordIndex]);
      currentLineLength = currentLineLength + 1 + words[wordIndex].length;
      wordIndex++;
    }

    // Handle last line or single word line - left justified
    if (wordIndex === totalWords || currentLineWords.length === 1) {
      const leftJustifiedText = currentLineWords.join(" ");
      const rightPadding = " ".repeat(maxWidth - leftJustifiedText.length);
      result.push(leftJustifiedText + rightPadding);
      continue;
    }

    // Calculate space distribution for full justification
    // Total spaces needed minus the minimum single spaces between words
    const totalSpacesToDistribute =
      maxWidth - (currentLineLength - currentLineWords.length + 1);
    const gapsBetweenWords = currentLineWords.length - 1;
    const baseSpacesPerGap = Math.floor(
      totalSpacesToDistribute / gapsBetweenWords,
    );
    const extraSpaces = totalSpacesToDistribute % gapsBetweenWords;

    // Build the fully justified line
    const justifiedLine = [];
    for (let i = 0; i < currentLineWords.length - 1; i++) {
      justifiedLine.push(currentLineWords[i]);
      // Add base spaces plus one extra space for the first 'extraSpaces' gaps
      const spacesToAdd = baseSpacesPerGap + (i < extraSpaces ? 1 : 0);
      justifiedLine.push(" ".repeat(spacesToAdd));
    }
    // Add the last word without trailing spaces
    justifiedLine.push(currentLineWords[currentLineWords.length - 1]);

    result.push(justifiedLine.join(""));
  }

  return result;
}
