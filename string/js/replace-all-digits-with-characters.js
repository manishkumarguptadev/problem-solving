function replaceDigits(s) {
  const stringLength = s.length;

  const resultArray = [...s];

  for (let index = 1; index < stringLength; index += 2) {
    const previousCharCode = resultArray[index - 1].charCodeAt(0);

    const shiftAmount = Number(resultArray[index]);

    const newCharCode = previousCharCode + shiftAmount;

    resultArray[index] = String.fromCharCode(newCharCode);
  }

  return resultArray.join("");
}
