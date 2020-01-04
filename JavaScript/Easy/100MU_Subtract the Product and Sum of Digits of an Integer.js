// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
// 03/01/2020
// 123 / 123 test cases passed.
// Runtime: 56 ms, faster than 58.77% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
// Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    return n.toString().split('').reduce( (a,b) => a * b ) - n.toString().split('').reduce( (a,b) => parseInt(a) + parseInt(b) )
}