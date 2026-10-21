function generate(numRows) {
  const pascalTriangle = [[1]];

  for (let rowIndex = 0; rowIndex < numRows - 1; rowIndex++) {
    const currentRow = [1];

    for (
      let colIndex = 1;
      colIndex < pascalTriangle[rowIndex].length;
      colIndex++
    ) {
      const sum =
        pascalTriangle[rowIndex][colIndex - 1] +
        pascalTriangle[rowIndex][colIndex];
      currentRow.push(sum);
    }

    currentRow.push(1);

    pascalTriangle.push(currentRow);
  }

  return pascalTriangle;
}
