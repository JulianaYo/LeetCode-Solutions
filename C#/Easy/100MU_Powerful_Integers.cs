// https://leetcode.com/problems/powerful-integers/
// 18/11/2019
// 93 / 93 test cases passed.
// Runtime: 208 ms, faster than 86.11% of C# online submissions for Powerful Integers.
// Memory Usage: 25.2 MB, less than 100.00% of C# online submissions for Powerful Integers.

public class Solution {
    public IList<int> PowerfulIntegers(int x, int y, int bound) {
        List<int> arr = new List<int>();
        
        for (int i = 0; i <= Math.Log(bound) + 6; i++) {
            for (int j = 0; j <= Math.Log(bound) + 6; j++) {
                double checkNum = Math.Pow(x, i) + Math.Pow(y, j);
                
                if (checkNum <= bound) {
                    arr.Add(Convert.ToInt32(checkNum));
                }
            }
        }
        return arr.Distinct().ToList();
    }
}