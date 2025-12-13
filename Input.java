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

        // array input
        // int n, i;
        // BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // System.out.println("Enter the count of numbers");
        // n = Integer.parseInt(br.readLine());
        // int arr[] = new int[n];
        // for (i = 0; i < n; i++) // Entering numbers at runtime
        // {
        // System.out.println("Number " + (i + 1) + "=");
        // arr[i] = Integer.parseInt(br.readLine());
        // or
        // arr[i]= (int)(Math.random()*100);
        // }

        // int a, b;
        // Scanner sc = new Scanner(System.in);
        // System.out.println("Enter two numbers");
        // a = sc.nextInt();
        // b = sc.nextInt();
        // System.out.println(a + b);

        // array
        // Scanner sc = new Scanner(System.in);
        // System.out.println("Enter array size");
        // int size = sc.nextInt();
        // int[] arr = new int[size];
        // System.out.printf("Enter " + size + " integers");
        // for (int index = 0; index < arr.length; index++) {
        // System.out.println("Number " + (index + 1) + "=");
        // arr[index] = sc.nextInt();;
        // }

        // random number array
        // int arr[] = new int[50];
        // for (int i = 0; i < 50; i++)
        // arr[i] = (int) (Math.random() * 100);

        // array
        // BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // System.out.println("Enter the count of numbers");
        // int n = Integer.parseInt(br.readLine());
        // int arr[] = new int[n];
        // System.out.printf("Enter " + n + " integers");
        // for (int i = 0; i < n; i++) {
        // System.out.println("Number " + (i + 1) + "=");
        // arr[i] = Integer.parseInt(br.readLine());
        // }

        // matrix
        // int r, c, i, j;
        // BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // System.out.println("Enter rows of matrix");
        // r = Integer.parseInt(br.readLine());
        // System.out.println("Enter columns of matrix");
        // c = Integer.parseInt(br.readLine());
        // int arr1[][] = new int[r][c];
        // System.out.println("Enter elements of matrix");
        // for (i = 0; i < r; i++) {
        // for (j = 0; j < c; j++) {
        // System.out.println("arr1[" + (i + 1) + "][" + (j + 1) + "]=");
        // arr1[i][j] = Integer.parseInt(br.readLine());
        // }
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

        String str = sc.nextLine();

        // choice input
        // Scanner scanner = new Scanner(System.in);
        // System.out.print("Do you want to search for the minimum or maximum?
        // (min/max): ");
        // String choice = scanner.nextLine();
        // if (choice.equalsIgnoreCase("min")) {
        // findAndDisplayMinimum();
        // } else if (choice.equalsIgnoreCase("max")) {
        // findAndDisplayMaximum();
        // } else {
        // System.out.println("Invalid choice. Please enter 'min' or 'max'.");
        // }

        // string
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter a string");
        String s = br.readLine();
        s = s.trim();

        // string
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a string");
        s = sc.nextLine();
        s = s.trim();

    }

}
