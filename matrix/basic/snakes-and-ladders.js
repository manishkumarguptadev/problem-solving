var snakesAndLadders = function (board) {
  const n = board.length;

  // we convert 1D index into correct [row, col] accounting for zigzag
  function getRC(idx) {
    const r = n - 1 - Math.floor((idx - 1) / n);
    let c = (idx - 1) % n;
    if ((n - 1 - r) % 2 === 1) c = n - 1 - c;
    return [r, c];
  }

  const visited = new Array(n * n + 1).fill(false);
  const queue = [[1, 0]]; // [square index, move count]
  visited[1] = true;

  while (queue.length > 0) {
    const [curr, moves] = queue.shift();

    for (let i = 1; i <= 6; i++) {
      let next = curr + i;
      if (next > n * n) continue;

      const [r, c] = getRC(next);
      if (board[r][c] !== -1) {
        next = board[r][c]; // we jump via snake or ladder
      }

      if (next === n * n) return moves + 1;
      if (!visited[next]) {
        visited[next] = true;
        queue.push([next, moves + 1]);
      }
    }
  }

  return -1; // unreachable
};

function snakesAndLadders(board) {
  const boardSize = board.length;
  const targetSquare = boardSize * boardSize;

  // Initialize BFS queue with starting position 1
  let currentLevelQueue = [1];

  // Track visited squares to avoid revisiting
  const visited = Array(targetSquare + 1).fill(false);
  visited[1] = true;

  // BFS level-by-level traversal
  for (let moveCount = 0; currentLevelQueue.length > 0; moveCount++) {
    const nextLevelQueue = [];

    // Process all positions in current level
    for (const currentPosition of currentLevelQueue) {
      // Check if we've reached the target
      if (currentPosition === targetSquare) {
        return moveCount;
      }

      // Try all possible dice rolls (1 to 6)
      for (
        let nextPosition = currentPosition + 1;
        nextPosition <= Math.min(currentPosition + 6, targetSquare);
        nextPosition++
      ) {
        // Convert linear position to board coordinates
        // Row index (from bottom)
        let rowIndex = Math.floor((nextPosition - 1) / boardSize);
        // Column index
        let columnIndex = (nextPosition - 1) % boardSize;

        // Handle alternating row direction (Boustrophedon style)
        // Odd rows are traversed right-to-left
        if (rowIndex % 2 === 1) {
          columnIndex = boardSize - columnIndex - 1;
        }

        // Convert to actual board coordinates (board is stored top-to-bottom)
        rowIndex = boardSize - rowIndex - 1;

        // Get destination after snake/ladder (or stay at current position if -1)
        const destination =
          board[rowIndex][columnIndex] === -1
            ? nextPosition
            : board[rowIndex][columnIndex];

        // Add unvisited destinations to next level
        if (!visited[destination]) {
          visited[destination] = true;
          nextLevelQueue.push(destination);
        }
      }
    }

    // Move to next level
    currentLevelQueue = nextLevelQueue;
  }

  // Target square is unreachable
  return -1;
}
