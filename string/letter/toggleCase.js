function toggleCase(str) {
  let codes = [];
  for (let i = 0; i < str.length; i++) {
    const currentCharCode = str.charCodeAt(i);
    if (currentCharCode >= 65 && currentCharCode <= 90) {
      codes.push(currentCharCode + 32);
    } else if (currentCharCode >= 97 && currentCharCode <= 122) {
      codes.push(currentCharCode - 32);
    } else {
      codes.push(currentCharCode);
    }
  }
  return String.fromCharCode(...codes);
}

console.log(toggleCase("a1B,c"));
