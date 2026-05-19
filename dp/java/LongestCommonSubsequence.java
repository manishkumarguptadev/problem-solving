package dp.java;

public class LongestCommonSubsequence {
    public static int longestCommonSubsequence(String str1, String str2) {
        int n1 = str1.length();
        int n2 = str2.length();
        int[][] dp = new int[n1 + 1][n2 + 1];
        for (int i = 0; i <= n1; i++) {
            dp[i][0] = 0;
        }
        for (int j = 0; j <= n2; j++) {
            dp[0][j] = 0;
        }
        for (int i = 1; i <= n1; i++) {
            for (int j = 1; j <= n2; j++) {
                if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[n1][n2];
    }

    public static void main(String[] args) {
        String str1 = "ABCDGH";
        String str2 = "AECDFHR";
        int longestCommonSubsequence = longestCommonSubsequence(str1, str2);
        System.out.println("Length of Longest Common Subsequence: " + longestCommonSubsequence);
    }
}
