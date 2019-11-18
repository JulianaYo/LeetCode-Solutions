// https://leetcode.com/problems/missing-number/
// 4/11/2019
// 122 / 122 test cases passed.
// Runtime: 56 ms, faster than 90.45% of JavaScript online submissions for Missing Number.
// Memory Usage: 35.9 MB, less than 85.71% of JavaScript online submissions for Missing Number.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var n = nums.length;
    return (n * (n+1)) / 2 - nums.reduce((a, b) => a + b, 0)
};