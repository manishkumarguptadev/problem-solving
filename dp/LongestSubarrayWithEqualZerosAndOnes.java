package dp;

import java.util.HashMap;
import java.util.Map;

public class LongestSubarrayWithEqualZerosAndOnes {
    public static int findLongestSubarrayWithEqualZerosAndOnes(int[] nums) {
        int maxLen = 0;
        int prefixSum = 0;
        Map<Integer, Integer> sumMap = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                prefixSum -= 1;
            } else {
                prefixSum += 1;
            }
            if (prefixSum == 0) {
                maxLen = i + 1;
            } else if (sumMap.containsKey(prefixSum)) {
                maxLen = Math.max(maxLen, i - sumMap.get(prefixSum));
            } else {
                sumMap.put(prefixSum, i);
            }
        }
        return maxLen;
    }

    public static void main(String[] args) {
        int[] nums = { 1, 0, 1, 0, 0, 0, 1, 1, 0 };
        int longestSubarrayLength = findLongestSubarrayWithEqualZerosAndOnes(nums);
        System.out.println("Longest Subarray Length: " + longestSubarrayLength);
    }
}
