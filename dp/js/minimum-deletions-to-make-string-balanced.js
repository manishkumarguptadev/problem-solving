var minimumDeletions = function (s) {
  const stringLength = s.length;

  const dp = new Array(stringLength + 1).fill(0);

  let bCount = 0;

  for (let i = 1; i <= stringLength; ++i) {
    if (s[i - 1] === "b") {
      dp[i] = dp[i - 1];
      ++bCount;
    } else {
      dp[i] = Math.min(dp[i - 1] + 1, bCount);
    }
  }

  return dp[stringLength];
};
