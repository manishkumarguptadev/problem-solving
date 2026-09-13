function mergeSorted(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let p = n + m - 1; p > -1; p--) {
    if (p2 < 0) {
      break;
    }
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1 -= 1;
    } else {
      nums1[p] = nums2[p2];
      p2 -= 1;
    }
  }
  return nums1;
}
const merge = (nums1, m, nums2, n) => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
};
