// https://leetcode.com/problems/valid-perfect-square/
// 3/11/2019
// 68 / 68 test cases passed.
// Runtime: 52 ms, faster than 81.49% of JavaScript online submissions for Valid Perfect Square.
// Memory Usage: 34.6 MB, less than 25.00% of JavaScript online submissions for Valid Perfect Square.

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    for (var i = 1; i <= num / i; i++){
        if (num === 1) {
            return true
        } else {
        if (i*i === num) {
           return true
        }
    }
}
    return false
};