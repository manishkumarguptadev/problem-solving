const getRange = (num1, num2) =>
  num1 === num2 ? `${num1}` : `${num1}->${num2}`;

var summaryRanges = function (nums) {
  const arrayLength = nums.length;
  const result = [];

  let rangeStartIndex = 0;
  let rangeEndIndex = rangeStartIndex;
  while (rangeStartIndex < arrayLength) {
    while (
      rangeEndIndex + 1 < arrayLength &&
      nums[rangeEndIndex + 1] - nums[rangeEndIndex] === 1
    ) {
      rangeEndIndex++;
    }

    result.push(getRange(nums[rangeStartIndex], nums[rangeEndIndex]));

    rangeStartIndex = rangeEndIndex + 1;
    rangeEndIndex = rangeStartIndex;
  }

  return result;
};
