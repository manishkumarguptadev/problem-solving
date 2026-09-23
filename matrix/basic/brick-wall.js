var leastBricks = function (wall) {
  const map = {};
  let count = 0;

  for (let i = 0; i < wall.length; i++) {
    let sum = 0;
    for (let j = 0; j < wall[i].length - 1; j++) {
      sum += wall[i][j];
      map[sum] = ~~map[sum] + 1;
      count = Math.max(count, map[sum]);
    }
  }

  return wall.length - count;
};
