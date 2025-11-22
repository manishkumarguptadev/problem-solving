package array;

public class Mean {

    public static void main() {

        double sum = 0.0, var, sd, mean;

        int arr[] = { 1, 2, 3, 4, 5, 6 };
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        mean = sum / arr.length;
        sum = 0.0;
        for (int i = 0; i < arr.length; i++)
            sum += Math.pow((arr[i] - mean), 2);
        var = sum / arr.length;
        sd = Math.sqrt(var);

        System.out.println("Average=" + mean);
        System.out.println("Variance=" + var);
        System.out.println("Standard deviation=" + sd);
    }
}
