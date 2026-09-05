class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let node = this.root;
    for (let char of word) {
      if (!(char in node.children)) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEnd = true;
  }

  search(word) {
    const dfs = (node, wordIndex) => {
      for (let i = wordIndex; i < word.length; i++) {
        // If a wildcard character is encountered, recursively
        // search for the rest of the word from each child node.
        if (word[i] === ".") {
          for (let child in node.children) {
            if (dfs(node.children[child], i + 1)) {
              return true;
            }
          }
          return false;
        } else if (word[i] in node.children) {
          node = node.children[word[i]];
        } else {
          return false;
        }
      }
      // After processing the last character, return true
      // if we've reached the end of a word.
      return node.isEnd;
    };

    return dfs(this.root, 0);
  }
}
