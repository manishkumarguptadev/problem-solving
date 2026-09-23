var islandPerimeter = function (grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const m = grid.length;
  const n = grid[0].length;

  let islands = 0;
  let neighbours = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        islands++;

        if (i < m - 1 && grid[i + 1][j] === 1) {
          neighbours++;
        }

        if (j < n - 1 && grid[i][j + 1] === 1) {
          neighbours++;
        }
      }
    }
  }

  return islands * 4 - neighbours * 2;
};

var islandPerimeter = function (grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const m = grid.length;
  const n = grid[0].length;

  let perimeter = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        perimeter += i === 0 || grid[i - 1][j] === 0 ? 1 : 0;
        perimeter += j === 0 || grid[i][j - 1] === 0 ? 1 : 0;
        perimeter += j === n - 1 || grid[i][j + 1] === 0 ? 1 : 0;
        perimeter += i === m - 1 || grid[i + 1][j] === 0 ? 1 : 0;
      }
    }
  }

  return perimeter;
};
