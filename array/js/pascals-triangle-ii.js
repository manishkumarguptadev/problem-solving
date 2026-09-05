function getRow(rowIndex) {
  const pascalRow = Array(rowIndex + 1).fill(1);

  for (let currentRow = 2; currentRow <= rowIndex; currentRow++) {
    for (let position = currentRow - 1; position > 0; position--) {
      pascalRow[position] = pascalRow[position] + pascalRow[position - 1];
    }
  }

  return pascalRow;
}
