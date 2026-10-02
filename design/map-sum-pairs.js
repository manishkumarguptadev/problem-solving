class TrieNode {
  constructor() {
    this.children = {};
    this.val = null;
  }
}

class MapSum {
  constructor() {
    this.root = new TrieNode();
  }

  insert(key, val) {
    let current = this.root;

    for (let i = 0; i < key.length; i++) {
      const c = key[i];
      if (!current.children[c]) {
        current.children[c] = new TrieNode();
      }
      current = current.children[c];
    }

    current.val = val;
  }

  sum(prefix) {
    let current = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const c = prefix[i];
      if (current.children[c]) {
        current = current.children[c];
      } else {
        return 0;
      }
    }

    return this.dfs(current);
  }

  dfs(current) {
    let sum = current.val === null ? 0 : current.val;

    Object.keys(current.children).forEach((c) => {
      sum += this.dfs(current.children[c]);
    });

    return sum;
  }
}
