function spiralOrder(matrix) {
  let result = [];
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return result;
  }

  let rowBegin = 0,
    rowEnd = matrix.length - 1;
  let colBegin = 0,
    colEnd = matrix[0].length - 1;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    for (let i = colBegin; i <= colEnd; i++) {
      result.push(matrix[rowBegin][i]);
    }
    rowBegin++;

    for (let i = rowBegin; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
    }
    colEnd--;

    if (rowBegin <= rowEnd) {
      for (let i = colEnd; i >= colBegin; i--) {
        result.push(matrix[rowEnd][i]);
      }
      rowEnd--;
    }

    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        result.push(matrix[i][colBegin]);
      }
      colBegin++;
    }
  }

  return result;
}

function spiralOrder(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let row = 0;
  let col = -1;
  let direction = 1;
  const result = [];
  while (rows > 0 && cols > 0) {
    for (let i = 0; i < cols; i++) {
      col += direction;
      result.push(matrix[row][col]);
    }
    rows--;
    for (let i = 0; i < rows; i++) {
      row += direction;
      result.push(matrix[row][col]);
    }
    cols--;
    direction *= -1;
  }
  return result;
}
