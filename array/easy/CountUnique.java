package array.easy;

/**
 * CountDigits
 */
public class CountUnique {

    public static int countUnique(int[] arr) {
        int count = 0;
        for (int i = 0; i < arr.length; i++) {
            boolean isFound = false;
            for (int j = i - 1; j >= 0; j--) {
                if (arr[j] == arr[i]) {
                    isFound = true;
                    break;
                }
            }
            if (!isFound)
                count++;
        }
        return count;
    }

    public static void main(String[] args) {

        int[] arr = { 2, 6, 6, 2, 5 };

        System.out.println(countUnique(arr));
    }
}