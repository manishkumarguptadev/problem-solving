let reverse = function (charArray, start, end) {
  while (start < end) {
    let temp = charArray[start];
    charArray[start] = charArray[end];
    charArray[end] = temp;
    start++;
    end--;
  }
};

var reverseWords = function (s) {
  if (!s) {
    return;
  }
  s = s.trim();
  let strLen = s.length;
  if (strLen === 0) {
    return;
  }
  const charArray = s.split("");

  reverse(charArray, 0, strLen - 1);
  let start = 0;
  let end = 0;
  while (true) {
    // find the  start index of a word while skipping spaces.
    let count = 0;
    while (charArray[start] === " ") {
      start++;
      count++;
    }
    if (count > 1) {
      charArray.splice(start - count, count - 1);
      start -= count - 1;
    }
    if (start >= charArray.length) {
      break;
    }

    // find the end index of the word.
    end = start + 1;
    while (end < charArray.length && charArray[end] !== " ") {
      end++;
    }

    reverse(charArray, start, end - 1);

    start = end;
  }
  return charArray.join("");
};
