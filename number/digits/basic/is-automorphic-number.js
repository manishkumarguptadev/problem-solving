 // A number is called Automorphic number if and only if its square ends
    // in the same digits as the number itself.
    // eg. 76 because 76^2= 5776 , 25 because 25^2= 625
    public static void isAutomorphic(int n) {
        int sq, copy, c = 0;

        sq = n * n;
        copy = n;
        // counting number of digits in n
        while (n != 0) {
            c++;
            n = n / 10;
        }
        if (sq % Math.pow(10, c) == copy)
            System.out.println("Yes, It ");
        else
            System.out.println("No, It is not an automorphic number");
    }