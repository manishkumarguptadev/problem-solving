var numDecodings = function (s) {
  if (s[0] === "0") {
    return 0;
  }

  const n = s.length;

  const dp = new Array(length + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    let count = 0;

    if (s[i - 1] > "0") {
      count = dp[i - 1];
    }

    if (s[i - 2] === "1" || (s[i - 2] === "2" && s[i - 1] <= "6")) {
      count += dp[i - 2];
    }

    dp[i] = count;
  }

  return dp[n];
};
