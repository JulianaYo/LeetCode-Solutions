// https://leetcode.com/problems/keyboard-row/
// 18/11/2019
// 22 / 22 test cases passed.
// Runtime: 240 ms, faster than 96.72% of C# online submissions for Keyboard Row.
// Memory Usage: 29.4 MB, less than 100.00% of C# online submissions for Keyboard Row.


public class Solution {
    public string[] FindWords(string[] words) {  
        string[] arrKeybord;
        arrKeybord = new string[3] { "qwertyuiop", "asdfghjkl", "zxcvbnm" };
        List<string> arrWords = new List<string> {};
        for (int i = 0; i < words.Length; i++)
        {
            for (int j = 0; j < arrKeybord.Length; j++) {
                char[] arrCheckWord = words[i].ToLower().ToCharArray();
                bool checkWord = arrCheckWord.All(b => arrKeybord[j].IndexOf(b) > -1);
                if (checkWord) {
                    arrWords.Add(words[i]);
                }
            }
        }
        return arrWords.ToArray();
    }
}
