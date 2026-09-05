function rotateClockwise(matrix) {
  const newMatrix = matrix[0].map(() => []);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      newMatrix[j][matrix.length - 1 - i] = matrix[i][j];
    }
  }

  return newMatrix;
}

function rotate180(matrix) {
  return rotateClockwise(rotateClockwise(matrix));
}

function rotateCounterClockwise(matrix) {
  return rotateClockwise(rotate180(matrix));
}
