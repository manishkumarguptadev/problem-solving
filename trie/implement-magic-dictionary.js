class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class MagicDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  buildDict(dict) {
    dict.forEach((word) => {
      this.insert(word);
    });
  }

  insert(word) {
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
  search(searchWord) {
    const letters = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < searchWord.length; i++) {
      for (let j = 0; j < letters.length; j++) {
        const letter = letters[j];

        if (searchWord[i] !== letter) {
          const modifiedWord =
            searchWord.substr(0, i) + letter + searchWord.substr(i + 1);

          if (this.match(modifiedWord)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  match(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!current.children[c]) {
        return false;
      }
      current = current.children[c];
    }
    return current.isEnd;
  }
}
