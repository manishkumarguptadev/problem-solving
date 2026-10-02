const isPalindrome = (str) => str === str.split("").reverse().join("");
// console.log(isPalindrome("level"));

const isPalindromeIgnoringNonAlphaNumeric = (str) => {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanedStr === cleanedStr.split("").reverse().join("");
};
// console.log(isPalindromeIgnoringNonAlphaNumeric("A man, a plan, a canal, Panama!"))

const isPalindromeCaseInsensitive = (str) =>
  str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
// console.log(isPalindromeCaseInsensitive("LeVel"));
