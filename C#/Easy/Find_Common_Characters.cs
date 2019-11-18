//https://leetcode.com/problems/find-common-characters/
// 18/11/2019
// 83 / 83 test cases passed.
// Runtime: 252 ms, faster than 90.11% of C# online submissions for Find Common Characters.
// Memory Usage: 32.6 MB, less than 25.00% of C# online submissions for Find Common Characters.

public class Solution {
    public IList<string> CommonChars(string[] A) {
        List<string> arr = new List<string> {};
        char[] arrChecker = A[0].ToCharArray();
        A = A.Skip(1).ToArray();
        for (int i = 0; i < arrChecker.Length; i++){
            bool el = A.All( b => b.IndexOf(arrChecker[i]) > -1);
            if (el) {
                
        for (int j = 0; j < A.Length; j++) {
            
        A[j] = A[j].Remove(A[j].IndexOf(arrChecker[i]),1);
    }
                    arr.Add(arrChecker[i].ToString());
            }
        }
         return arr;
    }
}