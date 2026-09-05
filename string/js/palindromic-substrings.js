let isPalindrome = function (input, i, j) {
  while (j > i) {
    if (input[i] != input[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

let findAllPalindromeSubstrings = function (input) {
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (isPalindrome(input, i, j)) {
        console.log(input.substring(i, j + 1));
        count++;
      }
    }
  }
  return count;
};
let countPalindromes = function (s, left, right) {
  let count = 0;

  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) {
      break;
    }
    console.log(s.substring(left, right + 1));
    count++;
    left--;
    right++;
  }

  return count;
};

var countSubstrings = function (s) {
  if (!s || s.length === 0) {
    return 0;
  }

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    count += countPalindromes(s, i - 1, i + 1); // odd length
    count += countPalindromes(s, i, i + 1);
  }
  return count;
};

let palindrome = "aabbbaa";
console.log("Total palindrom substrings: ", countSubstrings(palindrome));
