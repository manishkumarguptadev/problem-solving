function findLargest(arr) {
  let lar = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > lar) {
      lar = arr[i];
    }
  }
  return lar;
}

function findSmallest(arr) {
  let sm = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < sm) {
      sm = arr[i];
    }
  }
  return sm;
}
function findSmallest(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr[0];
}
function findLargest(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr[arr.length - 1];
}
let arr = [56, 112, 6, 89, 63, 78, 14, 65, 77, 10];

console.log("Largest = " + findLargest(arr));
console.log("Smallest = " + findSmallest(arr));
