const INT_SIZE = 32;

class TrieNode {
  constructor() {
    this.children = {};
    this.num = null;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(num) {
    let current = this.root;

    for (let i = INT_SIZE - 1; i >= 0; i--) {
      // Shift the number right and extract the last bit
      const bit = (num >>> i) & 1;

      if (!current.children[bit]) {
        current.children[bit] = new TrieNode();
      }
      current = current.children[bit];
    }

    current.num = num;
  }

  search(num) {
    let current = this.root;

    for (let i = INT_SIZE - 1; i >= 0; i--) {
      // Shift the number right and extract the last bit
      const bit = (num >>> i) & 1;

      // Prefer the opposite bit to maximize XOR
      if (current.children[1 - bit]) {
        current = current.children[1 - bit];
      } else {
        current = current.children[bit];
      }
    }

    return current.num;
  }
}

var findMaximumXOR = function (nums) {
  if (!nums || nums.length < 2) {
    return 0;
  }

  let max = 0;
  const trie = new Trie();
  trie.insert(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    const matchedNum = trie.search(nums[i]);
    max = Math.max(max, matchedNum ^ nums[i]);
    trie.insert(nums[i]);
  }

  return max;
};

var findMaximumXOR = function (nums) {
  let maxResult = 0;
  let mask = 0;

  // Find the highest bit position we actually need to check
  // This avoids iterating all 32 bits if the numbers are small
  let maxNum = 0;
  for (const num of nums) {
    if (num > maxNum) maxNum = num;
  }
  const highBit = maxNum > 0 ? 31 - Math.clz32(maxNum) : 0;

  // Iterate from the highest active bit down to 0
  for (let i = highBit; i >= 0; i--) {
    // Set the i-th bit in the mask
    mask = mask | (1 << i);

    // Store the prefixes of all numbers up to the i-th bit
    const prefixes = new Set();
    for (const num of nums) {
      prefixes.add(num & mask);
    }

    // Speculate if the i-th bit can be set to 1 in our maxResult
    let greedyTry = maxResult | (1 << i);

    // Using the XOR property: if a ^ b = c, then a ^ c = b
    // Check if there is any prefix 'p' such that p ^ greedyTry exists in the set
    for (const prefix of prefixes) {
      if (prefixes.has(prefix ^ greedyTry)) {
        maxResult = greedyTry;
        break;
      }
    }
  }

  return maxResult;
};
