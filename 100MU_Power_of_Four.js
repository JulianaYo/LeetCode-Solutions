// https://leetcode.com/problems/power-of-four/
// 5/11/2019
// 1060 / 1060 test cases passed.
// Runtime: 60 ms, faster than 99.20% of JavaScript online submissions for Power of Four.
// Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions for Power of Four.

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if ( num  === 0 || Math.sqrt(num) % 3 === 0 || Math.sqrt(num) % 5 === 0) {
        return false
    }
    
    if ( num === 4 || num  === 1 || Math.sqrt(num) % 4 === 0) {
        return true
    }
    
    return false
};