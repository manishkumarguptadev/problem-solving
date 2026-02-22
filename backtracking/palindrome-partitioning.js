var partition = function (s) {
  const res = [];
  backtrack(s, 0, [], res);
  return res;
};
const isPalindrome = (s, l, r) => {
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};

const backtrack = (s, currentIndex, path, res) => {
  if (currentIndex === s.length) {
    res.push([...path]);
    return;
  }

  for (let endIndex = currentIndex; endIndex < s.length; endIndex++) {
    if (isPalindrome(s, currentIndex, endIndex)) {
      path.push(s.substring(currentIndex, endIndex + 1));
      backtrack(s, endIndex + 1, path, res);
      path.pop();
    }
  }
};
