// https://leetcode.com/problems/find-all-duplicates-in-an-array/
// 05/03/2020
// 28 / 28 test cases passed.
// wrong solution with extraspace
// Runtime: 144 ms, faster than 32.08% of JavaScript online submissions for Find All Duplicates in an Array.
// Memory Usage: 45.1 MB, less than 50.00% of JavaScript online submissions for Find All Duplicates in an Array.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    nums.sort((a,b) => a - b)
    var arr =[];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            arr.push(nums[i])
        }
    }
    return arr
};