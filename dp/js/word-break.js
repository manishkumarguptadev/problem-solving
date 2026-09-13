// const wordBreak = (s, wordDict) => {
//   if (s === "" || wordDict.includes(s)) {
//     return true;
//   }

//   for (let i = 1; i <= s.length; i++) {
//     const prefix = s.substring(0, i);
//     const rest = s.substring(i);

//     if (wordDict.includes(prefix) && wordBreak(rest, wordDict)) {
//       return true;
//     }
//   }

//   return false;
// };
const wordBreak = (s, wordDict) => {
  const dp = Array(s.length + 1).fill(false);

  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const rest = s.substring(j, i);

      if (dp[j] && wordDict.includes(rest)) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
};
let s = "catsandog";
let dictionary = ["cats", "dog", "sand", "and", "cat"];
if (wordBreak(s, dictionary)) {
  console.log("String Can be Segmented");
} else {
  console.log("String Can NOT be Segmented");
}
