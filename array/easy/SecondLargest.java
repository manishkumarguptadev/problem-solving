package array.easy;

public class SecondLargest {

    public static void main(String[] args) {
        int i, lar, slar;
        int arr[] = { 56, 112, 6, 89, 112, 78, 14, 65, 77, 10 };
        lar = slar = arr[0];
        for (i = 1; i < arr.length; i++) {
            if (arr[i] > lar) {
                slar = lar;
                lar = arr[i];
            } else if (arr[i] > slar && arr[i] != lar) {
                slar = arr[i];
            }
        }
        System.out.println("Largest=" + lar);
        System.out.println("Smallest=" + slar);
    }

}
