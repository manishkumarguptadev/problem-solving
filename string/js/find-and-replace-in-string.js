function findReplaceString(s, indices, sources, targets) {
  const stringLength = s.length;

  // Create a mapping array to track which replacement (if any) should occur at each position
  // -1 means no replacement, otherwise stores the index of the replacement operation
  const replacementMapping = Array(stringLength).fill(-1);

  // Check each replacement operation and mark valid ones in the mapping
  for (
    let operationIndex = 0;
    operationIndex < indices.length;
    ++operationIndex
  ) {
    const startIndex = indices[operationIndex];
    const sourceString = sources[operationIndex];

    // Only mark this position for replacement if the source string matches at this index
    if (s.startsWith(sourceString, startIndex)) {
      replacementMapping[startIndex] = operationIndex;
    }
  }

  // Build the result string by iterating through the original string
  const resultParts = [];

  for (let currentIndex = 0; currentIndex < stringLength; ) {
    // Check if there's a replacement operation at the current position
    if (replacementMapping[currentIndex] >= 0) {
      const operationIndex = replacementMapping[currentIndex];

      // Add the target string to the result
      resultParts.push(targets[operationIndex]);

      // Skip past the source string length in the original string
      currentIndex += sources[operationIndex].length;
    } else {
      // No replacement at this position, copy the original character
      resultParts.push(s[currentIndex]);
      currentIndex++;
    }
  }

  // Join all parts to form the final result string
  return resultParts.join("");
}
