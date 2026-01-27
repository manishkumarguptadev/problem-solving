function nextGreatestLetter(letters, target) {
  const n = letters.length;

  let start = 0;
  let end = n - 1;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (target < letters[mid]) {
      end = mid - 1;
    } else {
      // target >= letters[mid]:
      start = mid + 1;
    }
  }
  // since the loop is running until 'start <= end',
  //  so at the end of the while loop, 'start === end+1'
  return letters[start % n];
}

console.log(nextGreatestLetter(["a", "c", "f", "h"], "f"));
console.log(nextGreatestLetter(["a", "c", "f", "h"], "b"));
console.log(nextGreatestLetter(["a", "c", "f", "h"], "m"));
