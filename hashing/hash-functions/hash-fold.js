function hashFold(key, chunkSize) {
  // Define the size of each divided portion
  let strKey = String(key); // Convert integer into string for slicing
  console.log("Key: " + strKey);
  let hashVal = 0;
  console.log("Chunks:");
  for (var i = 0; i < strKey.length; i += chunkSize) {
    if (i + chunkSize < strKey.length) {
      console.log(strKey.slice(i, i + chunkSize)); // Slice the appropriate chunk from the string
      hashVal += Number(strKey.slice(i, i + chunkSize)); // convert into integer
    } else {
      console.log(strKey.slice(i, strKey.length));
      hashVal += Number(strKey.slice(i, strKey.length));
    }
  }
  return hashVal;
}
let key = 3456789;
let chunkSize = 2;
console.log("Hash Key: " + String(hashFold(key, chunkSize)));
