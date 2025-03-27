import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Input {

    public static void main(String[] args) throws IOException {
        // int n;
        // BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // System.out.println("Enter a number");
        // n = Integer.parseInt(br.readLine());
        // System.out.println(n);

        // int a, b;
        // Scanner sc = new Scanner(System.in);
        // System.out.println("Enter two numbers");
        // a = sc.nextInt();
        // b = sc.nextInt();
        // System.out.println(a + b);

        // Scanner sc = new Scanner(System.in);
        // System.out.println("Enter array size");
        // int size = sc.nextInt();
        // int[] arr = new int[size];
        // System.out.printf("Enter " + size + " integers");
        // int n = sc.nextInt();
        // for (int index = 0; index < arr.length; index++) {
        // arr[index] = n;
        // n = sc.nextInt();
        // }

        // Scanner in = new Scanner(System.in);
        // Stack S = new Stack();
        // System.out.printf("Enter some integers ending with 0\n");
        // int n = in.nextInt();
        // while (n != 0) {
        // S.push(n);
        // n = in.nextInt();

        char c;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter an alphabet");
        c = sc.next().charAt(0);
        sc.close();

    }

}
