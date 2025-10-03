function longestSubstringWithUniqueChars(s) {
  let maxLen = 0;
  let set = new Set();

  let left, right;
  left = right = 0;
  while (right < s.length) {
    while (set.has(s.charAt(right))) {
      set.delete(s.charAt(left));
      left++;
    }

    set.add(s.charAt(right));
    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }

  return maxLen;
}
function longestSubstringWithUniqueChars(s) {
  let maxLen = 0;
  let set = new Set();

  let left = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
const longestSubstringWithUniqueChars = function (s) {
  let maxLen = 0;
  const map = new Map();

  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const prevIndex = map.get(s[right]);

    if (prevIndex !== undefined && prevIndex >= left) {
      left = prevIndex + 1;
    }

    map.set(s[right], right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

// Time: O(N^2);
// Space: O(N)

// const lengthOfLongestSubstring = function (s) {

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
