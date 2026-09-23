var maxSlidingWindow = function (nums, k) {
  let res = [];
  let deque = [];

  for (let idx = 0; idx < nums.length; idx++) {
    let num = nums[idx];

    while (deque.length && deque[deque.length - 1] < num) {
      deque.pop();
    }
    deque.push(num);

    if (idx >= k && nums[idx - k] === deque[0]) {
      deque.shift();
    }

    if (idx >= k - 1) {
      res.push(deque[0]);
    }
  }

  return res;
};
