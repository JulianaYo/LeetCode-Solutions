// https://leetcode.com/problems/two-sum/
// 19/11/2019
// 29 / 29 test cases passed.
// Runtime: 256 ms, faster than 5.39% of JavaScript online submissions for Two Sum.
// Memory Usage: 34.5 MB, less than 83.06% of JavaScript online submissions for Two Sum.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var arr = [];
    for (var i = 0; i < nums.length; i ++) {
        for (var j = 0; j < nums.length; j++) {
            if (i != j) {
                if ( nums[i] + nums[j] === target) {
                    arr.push(i)
                }
            }
        }
    }
    return arr;
};