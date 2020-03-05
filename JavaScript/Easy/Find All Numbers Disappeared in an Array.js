// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// 05/03/2020
// 34 / 34 test cases passed.
// solution with extra space
// Runtime: 6704 ms, faster than 9.95% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
// Memory Usage: 44 MB, less than 37.50% of JavaScript online submissions for Find All Numbers Disappeared in an Array.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var arr=[];
    for (var i = 1; i <= nums.length; i++) {
        if ( !nums.includes(i) ) {
        arr.push(i)
        }
    }
    return arr
};