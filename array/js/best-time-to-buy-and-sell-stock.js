function maxProfit(prices) {
  let profit = 0;
  let buyingPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, prices[i] - buyingPrice);
    buyingPrice = Math.min(buyingPrice, prices[i]);
  }

  return profit;
}

function maxProfit(prices) {
  let profit = 0;
  let buyingPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > buyingPrice) {
      profit = Math.max(profit, prices[i] - buyingPrice);
    } else if (prices[i] < buyingPrice) {
      buyingPrice = prices[i];
    }
  }
  return profit;
}
