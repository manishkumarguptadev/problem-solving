var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  const calculateGCD = (a, b) => {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  const gcdLength = calculateGCD(str1.length, str2.length);

  return str1.substring(0, gcdLength);
};
