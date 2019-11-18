// https://leetcode.com/problems/sum-of-square-numbers/
// 124 / 124 test cases passed.
// 7/11/2019 submission date
// Runtime: 56 ms, faster than 88.19% of JavaScript online submissions for Sum of Square Numbers.
// Memory Usage: 34.7 MB, less than 66.67% of JavaScript online submissions for Sum of Square Numbers.

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {

    for (var i = 0; i*i <= (c - i*i); i++){
             if (Math.sqrt(c - i*i) % 1 === 0) {
                 return true
             }    
         }
    return false
 };