function endsWith(str1, str2) {
  let i = str1.length - 1;
  let j = str2.length - 1;
  while (j >= 0) {
    if (str1[i] !== str2[j]) {
      return false;
    }
    i--;
    j--;
  }
  return true;
}

console.log(endsWith("hello", "lyo"));
