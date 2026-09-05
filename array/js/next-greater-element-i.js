var nextGreaterElement = function (nums1, nums2) {
  const ng = new Map();
  const st = [];

  for (let num of nums2) {
    while (st.length > 0 && st[st.length - 1] < num) {
      ng.set(st.pop(), num);
    }
    st.push(num);
  }

  return nums1.map((num) => (ng.has(num) ? ng.get(num) : -1));
};
