// https://leetcode.com/problems/valid-palindrome/
// 20/11/2019
// 476 / 476 test cases passed.
// Runtime: 80 ms, faster than 33.75% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 38.3 MB, less than 39.13% of JavaScript online submissions for Valid Palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s === '') {
        return true
    }
    var newS = s.toLowerCase().replace(/[\W_]+/g,'')
    return newS === newS.split('').reverse().join('') ? true : false
};