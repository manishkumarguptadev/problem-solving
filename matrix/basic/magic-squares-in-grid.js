function numMagicSquaresInside(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const checkMagicSquare = (startRow, startCol) => {
    // Check if 3x3 subgrid fits within grid boundaries
    if (startRow + 3 > rows || startCol + 3 > cols) {
      return 0;
    }

    // Track occurrences of each number (index 1-9 used, 0 and 10-15 unused)
    const numberCount = Array(16).fill(0);

    // Track sum of each row and column in the 3x3 subgrid
    const rowSums = Array(3).fill(0);
    const colSums = Array(3).fill(0);

    // Track diagonal sums: mainDiagonal (top-left to bottom-right),
    // antiDiagonal (top-right to bottom-left)
    let mainDiagonalSum = 0;
    let antiDiagonalSum = 0;

    // Iterate through the 3x3 subgrid
    for (let row = startRow; row < startRow + 3; row++) {
      for (let col = startCol; col < startCol + 3; col++) {
        const currentValue = grid[row][col];

        // Validate must be 1-9 and appear exactly once
        if (
          currentValue < 1 ||
          currentValue > 9 ||
          ++numberCount[currentValue] > 1
        ) {
          return 0;
        }

        // Calculate relative position within 3x3 subgrid
        const relativeRow = row - startRow;
        const relativeCol = col - startCol;

        // Add to row and column sums
        rowSums[relativeRow] += currentValue;
        colSums[relativeCol] += currentValue;

        // Add to main diagonal sum if on main diagonal
        if (relativeRow === relativeCol) {
          mainDiagonalSum += currentValue;
        }

        // Add to anti-diagonal sum if on anti-diagonal
        if (relativeRow === 2 - relativeCol) {
          antiDiagonalSum += currentValue;
        }
      }
    }

    // Check if both diagonals have the same sum
    if (mainDiagonalSum !== antiDiagonalSum) {
      return 0;
    }

    // Check if all rows and columns have the same sum as the diagonals
    for (let index = 0; index < 3; index++) {
      if (
        rowSums[index] !== mainDiagonalSum ||
        colSums[index] !== mainDiagonalSum
      ) {
        return 0;
      }
    }

    // All conditions met - this is a magic square
    return 1;
  };

  // Count total magic squares by checking each possible 3x3 position
  let totalMagicSquares = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      totalMagicSquares += checkMagicSquare(row, col);
    }
  }

  return totalMagicSquares;
}
