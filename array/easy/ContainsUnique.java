package array.easy;

import java.util.HashSet;

public class ContainsUnique {
    public static boolean containsUnique(int[] array) {
        HashSet<Integer> set = new HashSet<Integer>();
        for (int element : array) {
            if (!set.add(element)) {
                return false; // If the element cannot be added to the set, it is a duplicate.
            }
        }
        return true; // No duplicates found.
    }

    public static boolean containsUnique1(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            boolean isFound = false;
            for (int j = i - 1; j >= 0; j--) {
                if (arr[j] == arr[i]) {
                    isFound = true;
                    break;
                }
            }
            if (isFound)
                return false;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(containsUnique1(new int[] { 1, 22, 10, 2 }));
    }
}
