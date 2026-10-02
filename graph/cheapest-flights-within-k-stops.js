var findCheapestPrice = function (n, flights, src, dst, k) {
  const INF = Infinity;
  // we initialize prices to all cities as Infinity
  let prices = new Array(n).fill(INF);
  prices[src] = 0;

  // we relax edges up to k+1 times
  for (let i = 0; i <= k; i++) {
    // we make a copy of current prices to avoid overwriting during iteration
    let tempPrices = [...prices];
    for (let [from, to, cost] of flights) {
      if (prices[from] === INF) continue;
      tempPrices[to] = Math.min(tempPrices[to], prices[from] + cost);
    }
    prices = tempPrices;
  }

  return prices[dst] === INF ? -1 : prices[dst];
};
