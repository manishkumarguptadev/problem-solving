function hashTrunc(key) {
  return key % 1000; // Will always give us a key of up to 3 digits
}
let key = 123456;
let index = hashTrunc(key); // Fit the key into the array size
console.log("The index for key " + String(key) + " is " + String(index));
