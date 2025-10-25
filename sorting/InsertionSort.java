package sorting;

import java.util.Arrays;

public class InsertionSort {

    public static void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int currentElement = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > currentElement) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = currentElement;
        }
    }

    public static void main(String[] args) {
        int[] arr = { 20, 5, 38, 7, 15 };
        insertionSort(arr);
        System.out.println(Arrays.toString(arr));
    }

}
