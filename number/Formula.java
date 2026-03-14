import java.io.*;
import java.util.Scanner;

public class Formula {
    public static void leapYear(int n) {
        if ((n % 400 == 0) || (n % 4 == 0 && n % 100 != 0))
            System.out.println("YES");
        else
            System.out.println("NO");
    }

    public static void validTriangle() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int ch, flag = 0;
        System.out.println("Press 1 to enter angles or 2 for sides");
        ch = Integer.parseInt(br.readLine());
        if (ch == 1) {
            System.out.println("Enter the three angles of the triangles in degree");
            double angle1 = Double.parseDouble(br.readLine());
            double angle2 = Double.parseDouble(br.readLine());
            double angle3 = Double.parseDouble(br.readLine());
            if ((angle1 + angle2 + angle3) == 180.0)
                flag = 1;
        } else if (ch == 2) {
            System.out.println("Enter the three sides of the triangle");
            double side1 = Double.parseDouble(br.readLine());
            double side2 = Double.parseDouble(br.readLine());
            double side3 = Double.parseDouble(br.readLine());
            if ((side1 + side2) > side3 && (side2 + side3) > side1 &&
                    (side3 + side1) > side2)
                flag = 1;
        }
        if (flag == 1)
            System.out.println("VALID TRIANGLE");
        else
            System.out.println("INVALID TRIANGLE");
    }

    public static void basicSalary() {
        double BS, HRA, DA;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter basic salary");
        BS = sc.nextDouble();
        if (BS <= 10000) {
            HRA = 0.2 * BS;
            DA = 0.8 * BS;
        } else if (BS > 10000 && BS <= 20000) {
            HRA = 0.25 * BS;
            DA = 0.9 * BS;
        } else {
            HRA = 0.3 * BS;
            DA = 0.95 * BS;
        }
        System.out.println("Basic Salary=" + BS);
        System.out.println("House Rent Allowance=" + HRA);
        System.out.println("Daily Allowances=" + DA);
        System.out.println("Gross salary=" + (BS + HRA + DA));
        sc.close();

    }

    public static void electricityBill() throws IOException {
        double bill = 0.0;
        int units;
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter number of units consumed");
        units = Integer.parseInt(br.readLine());
        if (units <= 50)
            bill = 0.5 * units;
        else if (units > 50 && units <= 150)
            bill = 0.5 * 50 + (units - 50) * 0.75;
        else if (units > 150 && units <= 250)
            bill = 0.5 * 50 + 0.75 * 100 + (units - 150) * 1.2;
        else
            bill = 0.5 * 50 + 0.75 * 100 + 1.2 * 100 + (units - 250) * 1.5;
        // Calculating tax and adding it to bill
        bill = bill + 0.2 * bill;
        System.out.println("Total amount to be paid=" + bill);
    }

    public static void weeklyWages() {
        int H;
        double wages, R;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Hourly Rate");
        R = sc.nextDouble();
        System.out.println("Enter number of hours worked");
        H = sc.nextInt();
        if (H <= 35)
            wages = R * H;
        else if (H > 35 && H <= 60)
            wages = R * 35 + R * 1.5 * (H - 35);
        else
            wages = R * 35 + R * 1.5 * 25 + R * 2 * (H - 60);
        System.out.println("Weekly wages=" + wages);
        sc.close();
    }

    public static void daysOfMonth() throws IOException {
        int y, m;
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter year");
        y = Integer.parseInt(br.readLine());
        System.out.println("Enter month number");
        m = Integer.parseInt(br.readLine());
        switch (m) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                System.out.println("Number of days=31");
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                System.out.println("Number of days=30");
                break;
            case 2:
                if ((y % 400 == 0) || (y % 4 == 0 &&
                        y % 100 != 0)) // Checking for leap year
                    System.out.println("Number of days=29");
                else
                    System.out.println("Number of days=28");
                break;
            default:
                System.out.println("INVALID MONTH NUMBER");
        }
    }

    public static void profitLoss() {
        double sp, cp;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter cost price");
        cp = sc.nextDouble();
        System.out.println("Enter selling price");
        sp = sc.nextDouble();
        if (sp > cp) {
            double profit_percent = (sp - cp) * 100.0 / cp;
            System.out.println("Profit percent= " + profit_percent);
        } else if (cp > sp) {
            double loss_percent = (cp - sp) * 100.0 / cp;
            System.out.println("Loss percent= " + loss_percent);
        } else
            System.out.println("No profit or loss");
        sc.close();
    }

    public static void typeOfTriangle() {
        int a, b, c, ch;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter three angles of a triangle");
        a = sc.nextInt();
        b = sc.nextInt();
        c = sc.nextInt();
        if ((a + b + c) == 180) {
            System.out.println("Press one of the following keys to check "); /* Try to use \n to print on next line */
            System.out.println("1 for Isosceles triangle");
            System.out.println("2 for Equilateral triangle");
            System.out.println("3 for Scalene triangle");
            System.out.println("4 for Acute angled triangle");
            System.out.println("5 for Right angled triangle");
            System.out.println("6 for Obtuse angled triangle");
            ch = sc.nextInt();
            switch (ch) {
                case 1:
                    if (a == b || a == c || b == c)
                        System.out.println("YES, it is an isosceles triangle");
                    else
                        System.out.println("NO, it is not an isosceles triangle");
                    break;
                case 2:
                    if (a == b && a == c)
                        System.out.println("YES, it is an equilateral triangle");
                    else
                        System.out.println("NO, it is not an equilateral triangle");
                    break;
                case 3:
                    if (a != b && a != c && b != c)
                        System.out.println("YES, it is a scalene triangle");
                    else
                        System.out.println("NO, it is not a scalene triangle");
                    break;
                case 4:
                    if (a < 90 && b < 90 && c < 90)
                        System.out.println("YES, it is an acute angled triangle");
                    else
                        System.out.println("No, it is not an acute angled triangle");
                    break;
                case 5:
                    if (a == 90 || b == 90 || c == 90)
                        System.out.println("Yes, it is a right angled tiangle");
                    else
                        System.out.println("NO, it is not a right angled tiangle");
                    break;
                case 6:
                    if (a > 90 || b > 90 || c > 90)
                        System.out.println("Yes, it is an obtuse angled tiangle");
                    else
                        System.out.println("NO, it is not an obtuse angled tiangle");
                    break;
                default:
                    System.out.println("INVALID CHOICE");
            }
        } else
            System.out.println("INVALID TRIANGLE");
        sc.close();
    }

    public static void dayName() {
        int n;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a day number");
        n = sc.nextInt();
        switch (n) {
            case 1:
                System.out.println("MONDAY");
                break;
            case 2:
                System.out.println("TUESDAY");
                break;
            case 3:
                System.out.println("WEDNESDAY");
                break;
            case 4:
                System.out.println("THRUSDAY");
                break;
            case 5:
                System.out.println("FRIDAY");
                break;
            case 6:
                System.out.println("SATURDAY");
                break;
            case 7:
                System.out.println("SUNDAY");
                break;
            default:
                System.out.println("INVALID CHOICE");
        }
        sc.close();
    }

    public static void busFare() {
        int age, d, fare;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your age");
        age = sc.nextInt();
        System.out.println("Enter the distance travelled in Km");
        d = sc.nextInt();
        if (age < 5)
            fare = 0;
        else if (age >= 5 && age <= 15) {
            if (d < 20)
                fare = 5;
            else if (d >= 20 && d <= 100)
                fare = 15;
            else
                fare = 30;
        } else if (age > 15 && age <= 60) {
            if (d < 20)
                fare = 10;
            else if (d >= 20 && d <= 100)
                fare = 50;
            else
                fare = 100;
        } else {
            if (d < 20)
                fare = 0;
            else if (d >= 20 && d <= 100)
                fare = 25;
            else
                fare = 70;
        }
        System.out.println("Bus Fare= " + fare);
        sc.close();
    }

    public static void salesmanCommission() {
        int sales, target;
        double com;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your sales");
        sales = sc.nextInt();
        System.out.println("Enter the target");
        target = sc.nextInt();
        if (sales > target)
            com = 0.25 * (sales - target) + 0.10 * target;
        else if (sales == target)
            com = 0.10 * target;
        else
            com = 0;
        System.out.println("Commission= " + com);
        sc.close();
    }

    public static void parcelCharges() {
        int weight, bill;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter weight of parcel");
        weight = sc.nextInt();
        if (weight <= 10)
            bill = 15 * weight;
        else {
            bill = 15 * 10 + 8 * (weight - 10);
        }
        System.out.println("Bill= " + bill);
        sc.close();
    }

    public static void libraryCharges() {
        int days;
        double fine;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of days");
        days = sc.nextInt();
        if (days <= 10)
            fine = 1.0 * days;
        else if (days > 10 && days <= 20)
            fine = 1.0 * 10 + 1.5 * (days - 10);
        else
            fine = 1.0 * 10 + 1.5 * 10 + 2.0 * (days - 20);
        System.out.println("Fine= " + fine);
        sc.close();
    }

    public static void interest() {
        int ch;
        double P, R, T, SI, CI;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Principal");
        P = sc.nextDouble();
        System.out.println("Enter rate of interest per annum");
        R = sc.nextDouble();
        System.out.println("Enter time in years");
        T = sc.nextDouble();
        System.out.println("Press 1 for Simple Interest \nPress 2 for Compount Interest");
        ch = sc.nextInt();
        switch (ch) {
            case 1:
                SI = (P * T * R) / 100;
                System.out.println("Simple Interest= " + SI);
                System.out.println("Amount= " + (P + SI));
                break;
            case 2:
                CI = P * Math.pow((1 + R / 100), T) - P;
                System.out.println("Compound Interest= " + CI);
                System.out.println("Amount= " + (P + CI));
                break;
            default:
                System.out.println("INVALID CHOICE");
        }
        sc.close();
    }

    public static void volume() {
        int ch;
        double l, b, h, r;
        Scanner sc = new Scanner(System.in);
        System.out.println("Press the following keys to find the volume:");
        System.out.println("1 - cube \n2 - cuboid \n3 - cylinder \n4 - Sphere");
        ch = sc.nextInt();
        switch (ch) {
            case 1:
                System.out.println("Enter side of cube");
                l = sc.nextDouble();
                System.out.println("Volume= " + (l * l * l));
                break;
            case 2:
                System.out.println("Enter length, breadth and height of cuboid");
                l = sc.nextDouble();
                b = sc.nextDouble();
                h = sc.nextDouble();
                System.out.println("Volume= " + (l * b * h));
                break;
            case 3:
                System.out.println("Enter height and radius of the cylinder");
                h = sc.nextDouble();
                r = sc.nextDouble();
                System.out.println("Volume= " + (Math.PI * r * r * h));
                break;
            case 4:
                System.out.println("Enter radius of the sphere");
                r = sc.nextDouble();
                System.out.println("Volume= " + (4 * Math.PI * r * r * r / 3));
                break;
            default:
                System.out.println("INVALID CHOICE");
        }
        sc.close();
    }

    public static void main(String[] args) throws IOException {
    }
}