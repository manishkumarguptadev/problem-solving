function contains(str1, str2) {
  for (let i = 0; i <= str1.length - str2.length; i++) {
    let j;
    for (j = 0; j < str2.length; j++) {
      if (str2[j] !== str1[i + j]) {
        break;
      }
    }
    if (j === str2.length) {
      return true;
    }
  }
  return false;
}

console.log(contains("hello", "yy"));
