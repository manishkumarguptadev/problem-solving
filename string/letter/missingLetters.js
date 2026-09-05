function missingLetters(str) {
  let result = "";
  for (let i = 97; i <= 122; i++) {
    const letter = String.fromCharCode(i);
    if (str.indexOf(letter) == -1) {
      result += letter;
    }
  }
  return result;
}

function missingLetters(str) {
  let result = "";
  const letters = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < letters.length; i++) {
    const letter = letters.charAt(i);
    if (str.indexOf(letter) == -1) {
      result += letter;
    }
  }
  return result;
}

console.log(missingLetters("abc"));
