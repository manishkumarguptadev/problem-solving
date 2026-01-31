package string;

public class Palindrome {
    public static boolean isPalindrome(String str) {
        // Remove punctuation, case and spaces
        str = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        int left = 0;
        int right = str.length() - 1;
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    public static boolean isPalindromeRec(final String input) {
        return isPalindromeRec(input.toLowerCase(), 0, input.length() - 1);
    }

    static boolean isPalindromeRec(final String input,
            final int left, final int right) {
        if (left >= right)
            return true;
        if (input.charAt(left) == input.charAt(right)) {
            return isPalindromeRec(input, left + 1, right - 1);
        }
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome("mada M"));
    }
}
