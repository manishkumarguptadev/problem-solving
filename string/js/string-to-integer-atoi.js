var myAtoi = function (s) {
  if (!s) {
    return 0;
  }

  const n = s.length;
  let index = 0;

  while (index < n && s[index] === " ") {
    index++;
  }

  if (index === n) {
    return 0;
  }

  let sign = 1;
  if (s[index] === "-") {
    sign = -1;
  }

  if (s[index] === "-" || s[index] === "+") {
    index++;
  }

  let result = 0;
  const overflowThreshold = Math.trunc((2 ** 31 - 1) / 10);

  while (index < n) {
    if (s[index] < "0" || s[index] > "9") {
      break;
    }

    const currentDigit = s.charCodeAt(index) - 48;

    if (
      result > overflowThreshold ||
      (result === overflowThreshold && currentDigit > 7)
    ) {
      return sign > 0 ? 2147483647 : -2147483648;
    }

    result = result * 10 + currentDigit;
    index++;
  }

  return sign * result;
};
