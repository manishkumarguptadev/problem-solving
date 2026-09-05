function differenceOfSum(nums) {
  let elementSum = 0;
  let digitSum = 0;

  for (const num of nums) {
    elementSum += num;

    let currentNumber = num;
    while (currentNumber > 0) {
      digitSum += currentNumber % 10;
      currentNumber = Math.floor(currentNumber / 10);
    }
  }

  return elementSum - digitSum;
}
