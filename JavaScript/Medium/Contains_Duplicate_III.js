// https://leetcode.com/problems/contains-duplicate-iii/
// 21/11/2019
// 41 / 41 test cases passed.
// Runtime: 272 ms, faster than 33.14% of JavaScript online submissions for Contains Duplicate III.
// Memory Usage: 35.2 MB, less than 50.00% of JavaScript online submissions for Contains Duplicate III.

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
        for (var i = 0; i < nums.length; i++) {
        for (var j = i+1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) <= t && (Math.abs(i - j)) <= k) {
                return true
            }
        }
    }
    return false
};