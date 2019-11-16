// https://leetcode.com/problems/keyboard-row/
// 16/11/2019
// 22 / 22 test cases passed.
// Runtime: 48 ms, faster than 90.93% of JavaScript online submissions for Keyboard Row.
// Memory Usage: 33.8 MB, less than 87.50% of JavaScript online submissions for Keyboard Row.


/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var keyboardRows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    var arrWords = [];
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < keyboardRows.length; j++) {
            var checkWord = words[i].toLowerCase().split('').every( letter => {
                return keyboardRows[j].includes(letter)
            })
            if (checkWord)  {
                arrWords.push(words[i])
                break;
            }
        }
    }
    return arrWords
};

