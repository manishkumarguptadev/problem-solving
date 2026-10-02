package dp;

public class LongestSubsequenceWithEquals {
    public static int longestSubsequenceWithEquals(int[] arr) {
        int n = arr.length;
        if (n == 0) {
            return 0;
        }
        int max = arr[0];
        int maxCount = 1;
        int current = arr[0];
        int currentCount = 1;
        for (int i = 1; i < n; i++) {
            if (arr[i] == current) {
                currentCount++;
            } else {
                current = arr[i];
                currentCount = 1;
            }
            if (currentCount > maxCount) {
                if (max == current) {
                    maxCount = currentCount;
                } else {
                    max = current;
                    maxCount = currentCount;
                }
            }
        }
        return maxCount;
    }

    public static void main(String[] args) {
        int[] arr = { 2, 4, 4, 4, 6, 6, 7, 7, 7, 7, 8 };
        int longestSubsequenceLength = longestSubsequenceWithEquals(arr);
        System.out.println("Length of the longest subsequence with equals: " + longestSubsequenceLength);
    }
}