var maxProduct = function (nums) {
  let firstMax = 0;
  let secondMax = 0;

  for (let num of nums) {
    if (num > firstMax) {
      [secondMax, firstMax] = [firstMax, num];
    } else {
      secondMax = Math.max(secondMax, num);
    }
  }

  return (firstMax - 1) * (secondMax - 1);
};
