// function longestSubstringWithUniqueChars(s) {
//   let maxLen = 0;
//   let hashSet = new Set();
//   let left, right;
//   left = right = 0;
//   while (right < s.length) {
//     while (hashSet.has(s.charAt(right))) {
//       hashSet.delete(s.charAt(left));
//       left++;
//     }

//     hashSet.add(s.charAt(right));
//     maxLen = Math.max(maxLen, right - left + 1);
//     right++;
//   }
//   return maxLen;
// }

const longestSubstringWithUniqueChars = function (s) {
  if (s.length <= 1) {
    return s.length;
  }

  const seen = {};
  let left = 0,
    maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const prevIndex = seen[currentChar];

    if (prevIndex !== undefined && prevIndex >= left) {
      left = prevIndex + 1;
    }

    seen[currentChar] = right;

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};
// Time: O(N^2);
// Space: O(N)

// const lengthOfLongestSubstring = function (s) {
//   if (s.length <= 1) return s.length;

//   let longest = 0;

//   for (let left = 0; left < s.length; left++) {
//     let seenChars = {},
//       currentLength = 0;

//     for (let right = left; right < s.length; right++) {
//       const currentChar = s[right];

//       if (!seenChars[currentChar]) {
//         currentLength++;
//         seenChars[currentChar] = true;
//         longest = Math.max(longest, currentLength);
//       } else {
//         break;
//       }
//     }
//   }

//   return longest;
// };
console.log(longestSubstringWithUniqueChars("pppp"));
