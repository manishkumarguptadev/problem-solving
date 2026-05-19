function isPowerOfTwo(num) {
  if (num <= 0) {
    return false;
  }
  return (num & (num - 1)) === 0;
}
console.log(isPowerOfTwo(0));
