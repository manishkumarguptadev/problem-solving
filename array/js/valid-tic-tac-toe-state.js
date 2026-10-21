function validTicTacToe(board) {
  function countOccurrences(target) {
    let count = 0;
    for (const row of board) {
      for (const char of row) {
        if (char === target) {
          count++;
        }
      }
    }
    return count;
  }

  function hasWon(player) {
    // Check horizontal wins
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === player &&
        board[i][1] === player &&
        board[i][2] === player
      ) {
        return true;
      }
    }

    // Check vertical wins
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] === player &&
        board[1][i] === player &&
        board[2][i] === player
      ) {
        return true;
      }
    }

    // Check main diagonal (top-left to bottom-right)
    if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    ) {
      return true;
    }

    // Check anti-diagonal (top-right to bottom-left)
    if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    ) {
      return true;
    }

    return false;
  }

  const xCount = countOccurrences("X");
  const oCount = countOccurrences("O");

  // X plays first, so X count must equal O count or be one more than O count
  if (xCount !== oCount && xCount - 1 !== oCount) {
    return false;
  }

  // If X won, the game should have ended with X's turn (X count = O count + 1)
  if (hasWon("X") && xCount - 1 !== oCount) {
    return false;
  }

  // If O won, the game should have ended with O's turn (X count = O count)
  if (hasWon("O") && xCount !== oCount) {
    return false;
  }

  return true;
}
