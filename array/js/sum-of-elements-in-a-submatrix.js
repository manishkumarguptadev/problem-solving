class NumMatrix {
  constructor(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
      this.prefixSum = [[]];
      return;
    }
    const m = matrix.length;
    const n = matrix[0].length;
    this.prefixSum = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        this.prefixSum[i + 1][j + 1] =
          this.prefixSum[i][j + 1] + // top rectangle (everything above)
          this.prefixSum[i + 1][j] - // left rectangle (everything to the left)
          this.prefixSum[i][j] + // overlap counted twice
          matrix[i][j];
      }
    }
    // for (let r = 0; r < ROWS; r++) {
    //   let prefix = 0;
    //   for (let c = 0; c < COLS; c++) {
    //     prefix += matrix[r][c];
    //     const above = this.sumMat[r][c + 1];
    //     this.sumMat[r + 1][c + 1] = prefix + above;
    //   }
    // }
  }

  sumRegion(row1, col1, row2, col2) {
    return (
      this.prefixSum[row2 + 1][col2 + 1] - // big prefix up to bottom-right
      this.prefixSum[row2 + 1][col1] - // remove rows above r1
      this.prefixSum[row1][col2 + 1] + // remove columns left of c1
      this.prefixSum[row1][col1] // add back the overlap we subtracted twice
    );
  }
}
// class NumMatrix {
//   constructor(matrix) {
//     if (matrix.length === 0) {
//       this.ps = [];
//       return;
//     }
//     const m = matrix.length;
//     const n = matrix[0].length;
//     this.ps = Array.from({ length: m }, () => Array(n + 1).fill(0));

//     for (let i = 0; i < m; i++) {
//       for (let j = 0; j < n; j++) {
//         this.ps[i][j + 1] = this.ps[i][j] + matrix[i][j];
//       }
//     }
//   }

//   sumRegion(row1, col1, row2, col2) {
//     let sum = 0;
//     for (let r = row1; r <= row2; r++) {
//       sum += this.ps[r][col2 + 1] - this.ps[r][col1];
//     }
//     return sum;
//   }
// }
