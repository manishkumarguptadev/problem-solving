var lengthOfLastWord = function (s) {
  let end = s.length - 1;

  while (end >= 0 && s[end] === " ") {
    end--;
  }

  let start = end;
  while (start >= 0 && s[start] !== " ") {
    start--;
  }

  return end - start;
};
function lengthOfLastWord(s) {
  let ans = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) === " " && ans > 0) {
      break;
    } else if (s.charAt(i) !== " ") {
      ans++;
    }
  }
  return ans;
}
