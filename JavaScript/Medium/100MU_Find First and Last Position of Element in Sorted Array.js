// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// 06/02/2020
// 88 / 88 test cases passed.
// Runtime: 72 ms, faster than 17.34% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
// Memory Usage: 34.9 MB, less than 100.00% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    return nums.indexOf(target) != -1 ? [nums.indexOf(target), nums.length - 1 - nums.reverse().indexOf(target)] : [-1,-1]
};