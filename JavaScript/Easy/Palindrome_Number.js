// https://leetcode.com/problems/palindrome-number/
// 19/11/2019
// 11509 / 11509 test cases passed.
// Runtime: 204 ms, faster than 48.11% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 45.9 MB, less than 33.62% of JavaScript online submissions for Palindrome Number.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false 
    }
     if (x < 10) {
        return true
    }
    return parseInt(x.toString().split('').reverse().join('')) === x ? true : false;
};