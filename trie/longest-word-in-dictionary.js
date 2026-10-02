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
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      // For each character in the word, if it's not a child of
      // the current node, create a new TrieNode for that character.
      if (!(word[i] in current.children)) {
        current.children[word[i]] = new TrieNode();
      }

      current = current.children[word[i]];
    }
    // Mark the last node as the end of a word.
    current.isEnd = true;
  }

  // Search for a word in the trie, ensuring all prefixes are also complete words
  search(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      // Check if the path exists and each prefix is a complete word
      if (!(word[i] in current.children) || !current.children[word[i]].isEnd) {
        return false;
      }

      current = current.children[word[i]];
    }
    // Return whether the current node is marked as the end of the word.
    return true;
  }
}

// Find the longest word where every prefix is also a word in the array
function longestWord(words) {
  // Initialize the trie root
  const trie = new Trie();

  // Insert all words into the trie
  for (const word of words) {
    trie.insert(word);
  }

  // Track the longest valid word
  let longestValidWord = "";

  // Check each word to see if all its prefixes exist as complete words
  for (const word of words) {
    // If the word is valid and is either longer than current best
    // or same length but lexicographically smaller
    if (
      trie.search(word) &&
      (longestValidWord.length < word.length ||
        (longestValidWord.length === word.length && word < longestValidWord))
    ) {
      longestValidWord = word;
    }
  }

  return longestValidWord;
}
