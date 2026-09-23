function reverse(arr, left, right) {
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}

function rightRotate(nums, k) {
  k %= nums.length;
  let n = nums.length;
  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
}
// function rightRotate(arr, n) {
//   var rotatedList = [];
//   for (var item = arr.length - n; item < arr.length; item++)
//     rotatedList.push(arr[item]);
//   for (var item = 0; item < arr.length - n; item++) rotatedList.push(arr[item]);
//   return rotatedList;
// }

// function rightRotate(arr, n) {
//   return arr.splice(arr.length - n).concat(arr.splice(0, arr.length));
// }
let arr = [1, 2, 3, 4, 5];
console.log(arr);

rightRotate(arr, 3);
console.log(arr);
