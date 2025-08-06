import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class TwoSum {

    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> hashmap = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (hashmap.containsKey(complement))
                return new int[] { hashmap.get(complement), i };

            hashmap.put(nums[i], i);
        }
        throw new IllegalArgumentException("");
    }

    public static void main(String[] args) throws IOException {

        int nums[] = { 1, 25, 3, 4, 5, 6 };
        System.out.println(Arrays.toString(twoSum(nums, 30)));

    }

}
