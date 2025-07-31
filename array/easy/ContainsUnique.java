package array.easy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.Scanner;

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
        String word = "tajmahal";
        int i, index = -1;
        char ch;
        String s;
        word = word.toLowerCase();
        for (i = 0; i < word.length(); i++) {
            ch = word.charAt(i);
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                index = i;
                break;
            }
        }
        if (index == -1)
            System.out.println("Not possible to convert");
        else {
            s = word.substring(index) + word.substring(0, index) + "ay";
            System.out.println(s);
        }
    }
}