class HashEntry {
  constructor(key, data) {
    this.key = key;
    // data to be stored
    this.value = data;
    // reference to new entry
    this.next = null;
  }
}

let entry = new HashEntry(3, "Educative");
console.log(String(entry.key) + ", " + entry.value);
class HashTable {
  //Constructor
  constructor() {
    //Size of the HashTable
    this.slots = 10;
    //Current entries in the table
    //Used while resizing the table when half of the table gets filled
    this.size = 0;
    //Array of HashEntry objects (by deafult all None)
    this.bucket = [];
    for (var i = 0; i < this.slots; i++) {
      this.bucket[i] = null;
    }
  }
  //Hash Function
  getIndex(key) {
    let index = key % this.slots;
    return index;
  }
  //Helper Functions
  get_size() {
    return this.size;
  }
  isEmpty() {
    return this.get_size() == 0;
  }
}

let ht = new HashTable();
console.log(ht.isEmpty());
