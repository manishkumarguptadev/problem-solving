var twoSum = function (nums, target) {
  const diffMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in diffMap) {
      return [diffMap[nums[i]], i];
    }
    const diff = target - nums[i];
    diffMap[diff] = i;
  }

  return [];
};
// public static int[] twoSum(int[] nums, int target) {
//         Map<Integer, Integer> hashmap = new HashMap<>();

//         for (int i = 0; i < nums.length; i++) {
//             int complement = target - nums[i];
//             if (hashmap.containsKey(complement))
//                 return new int[] { hashmap.get(complement), i };

//             hashmap.put(nums[i], i);
//         }
//         throw new IllegalArgumentException("");
//     }
