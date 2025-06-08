package array.easy;

public class CumulativeSum {
    public static int[] calculateCumulativeSum(int[] input) {
        int[] output = new int[input.length];
        int sum = 0;
        for (int i = 0; i < input.length; i++) {
            sum += input[i];
            output[i] = sum;
        }
        return output;
    }

    public static void main(String[] args) {
        for (int element : calculateCumulativeSum(new int[] { 1, 2, 3, 4 })) {
            System.out.print(element + " ");
        }
    }
}