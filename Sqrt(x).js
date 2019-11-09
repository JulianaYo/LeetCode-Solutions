// https://leetcode.com/problems/sqrtx/
// 3/11/2019
// 1017 / 1017 test cases passed.
// Runtime: 60 ms, faster than 98.98% of JavaScript online submissions for Sqrt(x).
// Memory Usage: 35.5 MB, less than 97.22% of JavaScript online submissions for Sqrt(x).

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    return x === 1 ? 1 : Math.floor(Math.sqrt(x))
};