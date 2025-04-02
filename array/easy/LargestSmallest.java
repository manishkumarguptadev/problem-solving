package array.easy;

public class LargestSmallest {
    public static void main(String[] args) {
        int i, lar, sm;
        int arr[] = { 56, 112, 6, 89, 63, 78, 14, 65, 77, 10 };
        lar = arr[0];
        sm = arr[0];
        for (i = 1; i < arr.length; i++) {
            if (arr[i] > lar)
                lar = arr[i];
            if (arr[i] < sm)
                sm = arr[i];
        }
        System.out.println("Largest=" + lar);
        System.out.println("Smallest=" + sm);
    }

}
