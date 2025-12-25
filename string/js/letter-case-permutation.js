function letterCasePermutation(s) {
  permutations = [];
  permutations.push(s);

  for (i = 0; i < s.length; i++) {
    if (isNaN(parseInt(s[i], 10))) {
      const n = permutations.length;
      for (j = 0; j < n; j++) {
        const chars = permutations[j].split("");
        if (chars[i] === chars[i].toLowerCase()) {
          chars[i] = chars[i].toUpperCase();
        } else {
          chars[i] = chars[i].toLowerCase();
        }
        permutations.push(chars.join(""));
      }
    }
  }

  return permutations;
}
