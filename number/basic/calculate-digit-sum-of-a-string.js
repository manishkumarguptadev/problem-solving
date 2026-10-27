var digitSum = function (s, k) {
  while (s.length > k) {
    const groupSums = [];

    for (let startIndex = 0; startIndex < s.length; startIndex += k) {
      const group = s.slice(startIndex, startIndex + k);

      const digitSum = group
        .split("")
        .reduce((accumulator, digit) => accumulator + Number(digit), 0);

      groupSums.push(digitSum);
    }

    s = groupSums.join("");
  }

  return s;
};
