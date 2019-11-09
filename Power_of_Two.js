// https://leetcode.com/problems/power-of-two/
// 5/11/2019
// 1108 / 1108 test cases passed.
// Runtime: 68 ms, faster than 84.68% of JavaScript online submissions for Power of Two.
// Memory Usage: 35.5 MB, less than 53.85% of JavaScript online submissions for Power of Two.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n === 0) {
        return false
    }
    while (n % 2 === 0) {
        n = n / 2;
    }
    if (n === 1) {
        return true
    }
    return false
};