var findDuplicate = function (nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] !== i + 1) {
      j = nums[i] - 1;
      if (nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        return nums[i];
      }
    } else {
      i++;
    }
  }
};
var findDuplicate = function (nums) {
  let slow = nums[0];
  fast = nums[nums[0]];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  // find cycle length
  let current = nums[nums[slow]];
  let cycleLength = 1;
  while (current !== nums[slow]) {
    current = nums[current];
    cycleLength += 1;
  }

  return find_start(nums, cycleLength);
};

function find_start(nums, cycleLength) {
  let pointer1 = nums[0];
  let pointer2 = nums[0];
  // move pointer2 ahead 'cycleLength' steps
  while (cycleLength > 0) {
    pointer2 = nums[pointer2];
    cycleLength -= 1;
  }
  // increment both pointers until they meet at the start of the cycle
  while (pointer1 !== pointer2) {
    pointer1 = nums[pointer1];
    pointer2 = nums[pointer2];
  }
  return pointer1;
}
var findDuplicate = function (nums) {
  let tortoise = nums[0];
  let hare = nums[0];

  // Phase 1: Find the intersection point
  while (true) {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
    if (tortoise === hare) {
      break;
    }
  }

  // Phase 2: Find the entry point of the cycle (the duplicate)
  tortoise = nums[0]; // Reset tortoise to the start
  while (tortoise !== hare) {
    tortoise = nums[tortoise];
    hare = nums[hare];
  }

  return tortoise; // Or hare, as they meet at the duplicate
};
console.log(findDuplicate([1, 4, 4, 3, 2]));
console.log(findDuplicate([2, 1, 3, 3, 5, 4]));
console.log(findDuplicate([2, 4, 1, 4, 4]));
