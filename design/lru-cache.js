class DataNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DataList {
  constructor() {
    this.head = new DataNode();
    this.tail = new DataNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  addToTail(node) {
    let prevNode = this.getLast();
    node.next = this.tail;
    node.prev = prevNode;
    prevNode.next = node;
    this.tail.prev = node;
  }

  promote(node) {
    this.remove(node);
    this.addToTail(node);
  }

  getLast() {
    return this.tail.prev;
  }
  getFirst() {
    return this.head.next;
  }
}
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    // Hashmap
    this.map = new Map();
    // Doubly linked list
    this.dataList = new DataList();
  }

  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }
    const node = this.map.get(key);
    // Promote the node to the tail of the list
    this.dataList.promote(node);
    // Return the value
    return node.value;
  }

  put(key, value) {
    if (this.capacity === 0) {
      return;
    }

    let node;

    if (this.map.has(key)) {
      node = this.map.get(key);
      node.value = value;
      this.dataList.promote(node);
      return;
    }

    if (this.map.size === this.capacity) {
      node = this.dataList.getFirst();
      this.map.delete(node.key);
      this.dataList.remove(node);
    }

    node = new DataNode(key, value);
    this.map.set(key, node);
    this.dataList.addToTail(node);
  }
  print() {
    process.stdout.write(
      "Cache current size: " + String(this.cacheList.size) + ", "
    );
    process.stdout.write("Cache contents: {");

    let node = this.cacheList.getHead();
    while (node != null) {
      process.stdout.write(
        "{ " + String(node.first) + ", " + String(node.second) + " }"
      );
      node = node.next;
      if (node != null) {
        process.stdout.write(", ");
      }
    }
    console.log("}");
    console.log("-".repeat(100), "\n");
  }
}
function main() {
  let cacheCapacity = 2,
    cache = new LRUCache(cacheCapacity);
  console.log("Initial state of cache");
  console.log("Cache capacity: " + String(cacheCapacity));
  cache.print();

  let keys = [10, 10, 15, 20, 15, 25, 5],
    values = ["20", "get", "25", "40", "get", "85", "5"];

  for (let i = 0; i < keys.length; i++) {
    if (values[i] == "get") {
      console.log("Getting by Key: " + String(keys[i]));
      console.log("Cached value returned: " + cache.get(keys[i]));
    } else {
      console.log(
        "Setting cache: Key: " +
          String(keys[i]) +
          ", Value: " +
          String(values[i])
      );
      cache.set(keys[i], values[i]);
    }
    cache.print();
  }
}

main();
