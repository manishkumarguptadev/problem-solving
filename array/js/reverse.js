function reverse(arr) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    swap(arr, left, right);
    left++;
    right--;
  }

  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [1, 2, 3, 4, 5];
console.log();
console.log(reverse(arr));
