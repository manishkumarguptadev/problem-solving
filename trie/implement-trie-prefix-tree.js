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

  search(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      // For each character in the word, if it's not a child of
      // the current node, the word doesn't exist in the Trie.
      if (!(word[i] in current.children)) {
        return false;
      }

      current = current.children[word[i]];
    }
    // Return whether the current node is marked as the end of the word.
    return current.isEnd;
  }

  startsWith(prefix) {
    let current = this.root;

    for (let i = 0; i < prefix.length; i++) {
      if (!(prefix[i] in current.children)) {
        return false;
      }

      current = current.children[prefix[i]];
    }
    // Once we've traversed the nodes corresponding to each
    // character in the prefix, return True.
    return true;
  }
}
