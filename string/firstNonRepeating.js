function firstNonRepeating(str) {
  for (let i = 0; i < str.length; i++) {
    let found = false;
    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      return i;
    }
  }
  return -1;
}

console.log(firstNonRepeating("yabcyabc"));
