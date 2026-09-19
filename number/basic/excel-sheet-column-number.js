function titleToNumber(columnTitle) {
  let result = 0;

  for (const character of columnTitle) {
    // Convert the current result to base 26 and add the current character's value
    // 'A' corresponds to 1, 'B' to 2, ..., 'Z' to 26
    result = result * 26 + (character.charCodeAt(0) - "A".charCodeAt(0) + 1);
  }

  return result;
}
