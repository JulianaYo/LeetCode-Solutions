// https://leetcode.com/problems/majority-element/
// 10/11/2019
// 44 / 44 test cases passed.
// Runtime: 80 ms, faster than 18.16% of JavaScript online submissions for Majority Element.
// Memory Usage: 37.4 MB, less than 64.29% of JavaScript online submissions for Majority Element.


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    return nums.sort()[Math.round(nums.length/2) - 1]
 };