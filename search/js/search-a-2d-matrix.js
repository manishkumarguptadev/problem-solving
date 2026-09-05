var searchMatrix = function (matrix, target) {
  const [rows, cols] = [matrix.length, matrix[0].length];
  let [left, right] = [0, rows * cols - 1];

  while (left <= right) {
    const mid = (left + right) >> 1;
    const [row, col] = [Math.floor(mid / cols), mid % cols];
    const guess = matrix[row][col];

    const isTarget = guess === target;
    if (isTarget) return true;

    const isTargetGreater = guess < target;
    if (isTargetGreater) left = mid + 1;

    const isTargetLess = target < guess;
    if (isTargetLess) right = mid - 1;
  }

  return false;
};
const searchMatrix = (matrix, target) => {
  if (!matrix || matrix.length === 0) {
    return false;
  }

  const m = matrix.length;
  const n = matrix[0].length;

  let i = 0;
  let j = n - 1;

  while (i < m && j >= 0) {
    if (target === matrix[i][j]) {
      return true;
    } else if (target < matrix[i][j]) {
      j--;
    } else {
      i++;
    }
  }

  return false;
};
