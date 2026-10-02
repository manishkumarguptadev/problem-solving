function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}
function isUnique(str) {
  const chars = str.split("").sort();
  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === chars[i - 1]) {
      return false;
    }
  }
  return true;
}
function isUnique(str) {
  let chars = {};

  for (let i = 0; i < str.length; i++) {
    if (chars[str[i]]) {
      return false;
    } else {
      chars[str[i]] = true;
    }
  }

  return true;
}

/* TESTS */
console.log(isUnique("abcd"), "true");
console.log(isUnique("abccd"), "false");
console.log(isUnique("bhjjb"), "false");
console.log(isUnique("mdjq"), "true");
