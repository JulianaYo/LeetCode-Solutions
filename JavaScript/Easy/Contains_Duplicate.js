// https://leetcode.com/problems/contains-duplicate/
// 21/11/2019
// 18 / 18 test cases passed.
// Runtime: 1748 ms, faster than 5.10% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 38.7 MB, less than 88.24% of JavaScript online submissions for Contains Duplicate.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    return nums.filter(onlyUnique).length === nums.length ? false : true
};