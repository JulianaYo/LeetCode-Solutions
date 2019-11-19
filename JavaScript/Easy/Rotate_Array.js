// https://leetcode.com/problems/rotate-array/
// 19/11/2019
// 34 / 34 test cases passed.
// Runtime: 96 ms, faster than 32.15% of JavaScript online submissions for Rotate Array.
// Memory Usage: 36.2 MB, less than 10.53% of JavaScript online submissions for Rotate Array.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    for (var i = 0; i < k; i++) {
        nums.unshift(nums[nums.length - (i + 1)])
    }
    nums.length = nums.length - k;
    return nums
};