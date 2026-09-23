function buddyStrings(s, goal) {
  const sourceLength = s.length;
  const goalLength = goal.length;

  if (sourceLength !== goalLength) {
    return false;
  }

  const sourceCharCount = new Array(26).fill(0);
  const goalCharCount = new Array(26).fill(0);

  let differenceCount = 0;

  for (let i = 0; i < goalLength; i++) {
    const sourceCharIndex = s.charCodeAt(i) - "a".charCodeAt(0);
    const goalCharIndex = goal.charCodeAt(i) - "a".charCodeAt(0);

    sourceCharCount[sourceCharIndex]++;
    goalCharCount[goalCharIndex]++;

    if (s[i] !== goal[i]) {
      differenceCount++;
    }
  }

  for (let i = 0; i < 26; i++) {
    if (sourceCharCount[i] !== goalCharCount[i]) {
      return false;
    }
  }

  return (
    differenceCount === 2 ||
    (differenceCount === 0 && sourceCharCount.some((count) => count > 1))
  );
}
