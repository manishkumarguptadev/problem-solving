function getCommon(nums1, nums2) {
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      return nums1[i];
    }

    if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return -1;
}
function getCommon(nums1, nums2) {
  let seta = new Set(nums1);
  let arr = [];

  for (num of nums2) {
    if (seta.has(num)) {
      arr.push(num);
    }
  }

  return arr.length !== 0 ? Math.min(...arr) : -1;
}
let arr1 = [1, 5, 7, 10, 25, 30, 63, 64];
let arr2 = [2, 4, 5, 6, 7, 8, 50];
console.log("Least Common Number: " + getCommon(arr1, arr2));
