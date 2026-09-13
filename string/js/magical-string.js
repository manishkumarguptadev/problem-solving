const magicalString = (n) => {
  let s = "122";
  let i = 2;

  while (s.length < n) {
    const nextChar = `${parseInt(s.slice(-1)) ^ 3}`;
    const count = s[i++] - "0";
    s += nextChar.repeat(count);
  }

  return countOnes(s, n);
};

const countOnes = (s, n) => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += s[i] === "1" ? 1 : 0;
  }
  return count;
};
function magicalString(n) {
  // Initialize the magical string with the first three elements
  // The pattern starts with [1, 2, 2]
  const magicalSequence = [1, 2, 2];

  // Build the magical string until we have at least n elements
  // i represents the index that tells us how many times to repeat the next number
  for (let i = 2; magicalSequence.length < n; ++i) {
    // Get the last element in the current sequence
    const previousElement = magicalSequence[magicalSequence.length - 1];

    // Calculate the next element to add (alternates between 1 and 2)
    // If previous was 1, next is 2; if previous was 2, next is 1
    const currentElement = 3 - previousElement;

    // Add the current element to the sequence
    // The number of times to add is determined by magicalSequence[i]
    for (let count = 0; count < magicalSequence[i]; ++count) {
      magicalSequence.push(currentElement);
    }
  }

  // Take only the first n elements and count how many are equal to 1
  return magicalSequence.slice(0, n).filter((element) => element === 1).length;
}
