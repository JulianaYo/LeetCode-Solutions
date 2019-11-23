// https://leetcode.com/problems/valid-anagram/
// 21/11/2019
// 34 / 34 test cases passed.
// Runtime: 124 ms, faster than 10.88% of C# online submissions for Valid Anagram.
// Memory Usage: 26.1 MB, less than 25.00% of C# online submissions for Valid Anagram.

public class Solution {
    public bool IsAnagram(string s, string t) {
           string sortedS = String.Concat(s.OrderBy(c => c));
            string sortedT =  String.Concat(t.OrderBy(c => c));
        if (sortedS == sortedT) {
            return true;
        }
        return false;
    }
}