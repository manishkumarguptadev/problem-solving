package array.easy;

public class LargestSmallest {

    public static int findLargest(int[] arr) {
        int lar = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > lar)
                lar = arr[i];
        }
        return lar;
    }

    public static int findSmallest(int[] arr) {
        int sm = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < sm)
                sm = arr[i];
        }
        return sm;
    }

    public static void main(String[] args) {

        int arr[] = { 56, 112, 6, 89, 63, 78, 14, 65, 77, 10 };

        System.out.println("Largest=" + findLargest(arr));
        System.out.println("Smallest=" + findSmallest(arr));
    }

}
