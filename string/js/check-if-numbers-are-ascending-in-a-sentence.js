var areNumbersAscending = function (s) {
  let previousNumber = -1;

  for (const token of s.split(" ")) {
    if (token[0] >= "0" && token[0] <= "9") {
      const currentNumber = Number(token);

      if (currentNumber <= previousNumber) {
        return false;
      }

      previousNumber = currentNumber;
    }
  }

  return true;
};
