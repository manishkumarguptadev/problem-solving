class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    if (!word) {
      return;
    }
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!current.children[c]) {
        current.children[c] = new TrieNode();
      }
      current = current.children[c];
    }
    current.isEnd = true;
  }
}

const findAllConcatenatedWordsInADict = (words) => {
  const trie = new Trie();

  // Sort words by length: shorter words can form longer words, but not vice-versa
  words.sort((a, b) => a.length - b.length);

  const results = [];

  // DFS helper function with Memoization
  const canForm = (word, start, count, memo = {}) => {
    if (start === word.length) {
      return count >= 2; // Returns true only if formed by 2 or more distinct words
    }

    if (memo[start] !== undefined) {
      return memo[start];
    }

    let current = trie.root;
    for (let i = start; i < word.length; i++) {
      const c = word[i];
      if (!current.children[c]) {
        return (memo[start] = false);
      }
      current = current.children[c];

      // If we find a valid prefix word, try to match the remainder
      if (current.isEnd) {
        if (canForm(word, i + 1, count + 1, memo)) {
          return (memo[start] = true);
        }
      }
    }

    return (memo[start] = false);
  };

  for (const word of words) {
    if (word === "") continue; // Skip empty strings

    if (canForm(word, 0, 0)) {
      results.push(word);
    }

    // Crucial step: Only insert the word AFTER checking it.
    // This prevents it from matching with itself!
    trie.insert(word);
  }

  return results;
};
