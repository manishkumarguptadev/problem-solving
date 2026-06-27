var twoCitySchedCost = function (costs) {
  // we sort by cost difference: aCost - bCost
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));

  let minCost = 0;
  const n = costs.length / 2;

  for (let i = 0; i < n; i++) {
    minCost += costs[i][0]; // send to city A
  }

  for (let i = n; i < costs.length; i++) {
    minCost += costs[i][1]; // send to city B
  }

  return minCost;
};
