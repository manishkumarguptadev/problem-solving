function verifySudokuBoard(board) {
  // Create hash sets for each row, column, and subgrid to keep
  // track of numbers previously seen on any given row, column, or subgrid.
  let rowSets = [];
  let columnSets = [];
  let subgridSets = [];

  // Initialize the row and column sets.
  for (let i = 0; i < 9; i++) {
    rowSets.push(new Set());
    columnSets.push(new Set());
  }

  // Initialize the subgrid sets (3 x 3 = 9 subgrids).
  for (let i = 0; i < 3; i++) {
    let subgridRow = [];
    for (let j = 0; j < 3; j++) {
      subgridRow.push(new Set());
    }
    subgridSets.push(subgridRow);
  }

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let num = board[r][c];
      if (num === 0) {
        continue;
      }
      // Check if 'num' has been seen in the current row,
      // column, or subgrid.
      if (rowSets[r].has(num)) {
        return false;
      }
      if (columnSets[c].has(num)) {
        return false;
      }
      if (subgridSets[Math.floor(r / 3)][Math.floor(c / 3)].has(num)) {
        return false;
      }
      // If we passed the above checks, mark this value as seen
      // by adding it to its corresponding hash sets.
      rowSets[r].add(num);
      columnSets[c].add(num);
      subgridSets[Math.floor(r / 3)][Math.floor(c / 3)].add(num);
    }
  }
  return true;
}

console.log(
  verifySudokuBoard([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ])
);
