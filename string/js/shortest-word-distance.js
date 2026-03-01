function shortestWordDistance(words, word1, word2) {
  let minDistance = Number.MAX_SAFE_INTEGER;
  let index1 = -1;
  let index2 = -1;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      index1 = i;
    } else if (words[i] === word2) {
      index2 = i;
    }

    if (index1 !== -1 && index2 !== -1) {
      minDistance = Math.min(minDistance, Math.abs(index1 - index2));
    }
  }

  return minDistance;
}
