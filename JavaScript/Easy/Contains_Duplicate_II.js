// https://leetcode.com/problems/contains-duplicate-ii/
// 21/11/2019
// 23 / 23 test cases passed.
// Runtime: 868 ms, faster than 22.84% of JavaScript online submissions for Contains Duplicate II.
// Memory Usage: 36.4 MB, less than 94.74% of JavaScript online submissions for Contains Duplicate II.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
        for (var i = 0; i < nums.length; i++) {
        for (var j = i+1; j < nums.length; j++) {
            if (nums[i] === nums[j] && (Math.abs(i - j)) <= k) {
                return true
            }
        }
    }
    return false
};