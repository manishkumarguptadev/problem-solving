var findPermutationDifference = function (s, t) {
  const characterPositionsInS = Array(26).fill(0);

  const stringLength = s.length;

  for (let i = 0; i < stringLength; ++i) {
    const charIndex = s.charCodeAt(i) - 97;
    characterPositionsInS[charIndex] = i;
  }

  let totalDifference = 0;

  for (let i = 0; i < stringLength; ++i) {
    const charIndex = t.charCodeAt(i) - 97;

    const positionInS = characterPositionsInS[charIndex];
    totalDifference += Math.abs(positionInS - i);
  }

  return totalDifference;
};
