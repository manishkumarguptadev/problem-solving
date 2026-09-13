var removeTrailingZeros = function (num) {
  let lastNonZeroIndex = num.length - 1;

  while (lastNonZeroIndex >= 0 && num[lastNonZeroIndex] === "0") {
    lastNonZeroIndex--;
  }

  return num.substring(0, lastNonZeroIndex + 1);
};
