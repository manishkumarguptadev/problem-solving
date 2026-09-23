// 1. Recursive Approach (inefficient)
var climbStairs = function (n) {
  if (n <= 1) {
    return 1;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
};

// 2. DP Top-down (Memoization)
var climbStairs = function (n) {
  const memo = new Array(n + 1).fill(-1);

  const helper = (steps) => {
    if (steps <= 1) {
      return 1;
    }
    if (memo[steps] !== -1) {
      return memo[steps];
    }
    memo[steps] = helper(steps - 1) + helper(steps - 2);
    return memo[steps];
  };

  return helper(n);
};

// 3. DP Bottom-up (Tabulation)
var climbStairs = function (n) {
  if (n <= 1) {
    return 1;
  }

  const dp = new Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

// 4. Bottom-up Space Optimized
var climbStairs = function (n) {
  if (n <= 1) {
    return 1;
  }

  let prev = 1;
  let curr = 1;
  let temp;
  for (let i = 2; i <= n; i++) {
    temp = prev + curr;
    prev = curr;
    curr = temp;
  }
  return temp;
};
