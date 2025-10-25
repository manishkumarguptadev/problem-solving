var isAlmostPalindrome = function (str) {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) {
      return (
        isPalindrome(str, start + 1, end) || isPalindrome(str, start, end - 1)
      );
    }
    start++;
    end--;
  }
  return true;
};

var isPalindrome = function (str, start, end) {
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log(isAlmostPalindrome("fooef"));
