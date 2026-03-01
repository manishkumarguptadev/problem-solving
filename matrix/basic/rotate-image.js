var rotate = function (matrix) {
  matrix.reverse();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};

function rotate(matrix) {
  let n = matrix.length;

  // Iterate over each layer of the matrix
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = i; j < n - i - 1; j++) {
      // Save the temp element
      let temp = matrix[i][j];

      // Move bottom-left element to top-left
      matrix[i][j] = matrix[n - j - 1][i];

      // Move bottom-right element to bottom-left
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];

      // Move top-right element to bottom-right
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];

      // Assign temp element to top-right
      matrix[j][n - i - 1] = temp;
    }
  }
}

var rotate = function (matrix) {
  let n = matrix.length;

  // Step 1: Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Step 2: Reverse each row
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - j - 1];
      matrix[i][n - j - 1] = temp;
    }
  }
};

