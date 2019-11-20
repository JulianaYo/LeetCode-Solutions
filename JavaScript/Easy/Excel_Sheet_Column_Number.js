// https://leetcode.com/problems/excel-sheet-column-number/
// 20/11/2019
// 1000 / 1000 test cases passed.
// Runtime: 64 ms, faster than 93.66% of JavaScript online submissions for Excel Sheet Column Number.
// Memory Usage: 34.9 MB, less than 80.00% of JavaScript online submissions for Excel Sheet Column Number.

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), num = 0;
    if (s.length === 1) {
        return alphabet.indexOf(s.charAt(0)) + 1
    } else {
        for (var i = 0; i < s.length; i++) {
            num = num + Math.pow(alphabet.length, i) * (alphabet.indexOf(s.charAt(s.length - 1 - i)) + 1)
        }
    return num
    }
};