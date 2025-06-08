package array.easy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
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

    public static void main() throws IOException {
        String s, toggle = "";
        char ch;
        int i, l;
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter a string");
        s = br.readLine();
        l = s.length();
        for (i = 0; i < l; i++) {
            ch = s.charAt(i);
            if (Character.isLowerCase(ch))
                toggle += Character.toUpperCase(ch);
            else if (Character.isUpperCase(ch))
                toggle += Character.toLowerCase(ch);
            else
                toggle += ch;
        }
        System.out.println("Toggle Case= " + toggle);
    }
}
