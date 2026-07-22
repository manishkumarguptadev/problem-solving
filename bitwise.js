function oddOrEven(num) {
  let bitmask = 1;
  if ((num & bitmask) === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
function getIthBit(num, i) {
  let bitmask = 1 << i;
  if ((num & bitmask) === 0) {
    return 0;
  } else {
    return 1;
  }
}
function setIthBit(num, i) {
  let bitmask = 1 << i;
  return num | bitmask;
}
function clearIthBit(num, i) {
  let bitmask = ~(1 << i);
  return num & bitmask;
}
function updateIthBit(num, i, newBit) {
  num = clearIthBit(num, i);
  bitmask = newBit << i;
  return num | bitmask;
}
function clearLastIBits(num, i) {
  let bitmask = -1 << i;
  return num & bitmask;
}
