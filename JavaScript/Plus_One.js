// https://leetcode.com/problems/plus-one/
// 2/11/2019
// 109 / 109 test cases passed.
// Runtime: 44 ms, faster than 98.89% of JavaScript online submissions for Plus One.
// Memory Usage: 33.8 MB, less than 87.23% of JavaScript online submissions for Plus One.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var newDig = BigInt((digits.join('')))
    newDig++
    return newDig.toString().split('')
};